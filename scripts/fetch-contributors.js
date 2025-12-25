const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(
  __dirname,
  '../theme/components/contributors.json'
);
const REPO = 'bytedance/ByteMLPerf';

function fetchContributors(
  url = `https://api.github.com/repos/${REPO}/contributors?per_page=100`,
  allContributors = []
) {
  console.log(`Fetching: ${url}`);

  const options = {
    headers: {
      'User-Agent': 'Node.js Script',
    },
  };

  https
    .get(url, options, (res) => {
      // 处理重定向
      if (
        res.statusCode === 301 ||
        res.statusCode === 302 ||
        res.statusCode === 307
      ) {
        console.log(`Redirecting to: ${res.headers.location}`);
        fetchContributors(res.headers.location, allContributors);
        return;
      }

      if (res.statusCode !== 200) {
        console.error(
          `Failed to fetch contributors: ${res.statusCode} ${res.statusMessage}`
        );
        // 只有当完全没有数据时才写入空数组（或者保留旧文件）
        if (allContributors.length === 0) {
          // 尝试保留旧文件内容，如果文件不存在则写入空数组
          if (!fs.existsSync(OUTPUT_FILE)) {
            console.log('Writing empty array fallback.');
            fs.writeFileSync(OUTPUT_FILE, '[]');
          } else {
            console.log('Keeping existing file.');
          }
        } else {
          saveData(allContributors);
        }
        return;
      }

      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          const contributors = JSON.parse(data);
          const newAll = allContributors.concat(contributors);
          // 检查是否有下一页
          const linkHeader = res.headers.link;
          if (linkHeader && linkHeader.includes('rel="next"')) {
            const nextMatch = linkHeader.match(/<([^>]+)>;\s*rel="next"/);
            if (nextMatch) {
              fetchContributors(nextMatch[1], newAll);
            } else {
              saveData(newAll);
            }
          } else {
            saveData(newAll);
          }
        } catch (e) {
          console.error('Error parsing JSON:', e);
        }
      });
    })
    .on('error', (err) => {
      console.error('Error fetching contributors:', err);
    });
}

function saveData(data) {
  const uniqueData = Array.from(
    new Map(data.map((item) => [item.login, item])).values()
  );
  const minifiedData = uniqueData.map((c) => ({
    login: c.login,
    avatar_url: c.avatar_url,
    html_url: c.html_url,
    contributions: c.contributions,
  }));

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(minifiedData, null, 2));
  console.log(
    `Successfully saved ${minifiedData.length} contributors to ${OUTPUT_FILE}`
  );
}

fetchContributors();
