const fs = require("fs")
const path = require("path")

const dotenv = require("dotenv")

const envFiles = [
  `.env`,
  `.env.${process.env.NODE_ENV}`
]

for (const file of envFiles) {
  const envConfig = dotenv.parse(fs.readFileSync(file))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  hostname: process.env.VITE_HOST,
  port: process.env.VITE_PORT,
  // 是否自动在浏览器打开
  open: false,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  base: process.env.VITE_BASE_URL,
  outDir: process.env.VITE_OUTPUT_DIR,
  // 反向代理
  proxy: {
    api: {
      target: "",
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, "")
    }
  }
}