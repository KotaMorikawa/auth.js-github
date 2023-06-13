## Auth.js(旧Next-Auht)のthirdpartyプロバイダーを使用したログイン認証

・始めに npm install

・.envに以下を設定
```bash
GITHUB_ID= GitHubで設定
GITHUB_SECRET= GitHubで設定
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= openssl rand -base64 32 を実行して生成したキーを入力
```

・npm run dev で実行。
