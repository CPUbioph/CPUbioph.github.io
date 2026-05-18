import DefaultTheme from 'vitepress/theme'

function loadCozeChat() {
  if (typeof window === 'undefined') return

  // 避免热更新时重复加载
  if (document.getElementById('coze-chat-sdk')) return

  const script = document.createElement('script')
  script.id = 'coze-chat-sdk'
  script.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js'
  script.async = true

  script.onload = () => {
    // @ts-ignore
    if (!window.CozeWebSDK) {
      console.error('CozeWebSDK 未加载成功')
      return
    }

    // @ts-ignore
    new window.CozeWebSDK.WebChatClient({
      config: {
        bot_id: '7641204707662282793',
      },
      componentProps: {
        title: 'CPUbioph 学习资料助手',
      },
      auth: {
        type: 'token',
        token: 'pat_lZI2lNfUgUGPqlNWi419P45rpGA4pt3eqEx1BfjOBD4151CmYM33j4eVgUZzb1uV',
        onRefreshToken: function () {
          return 'pat_lZI2lNfUgUGPqlNWi419P45rpGA4pt3eqEx1BfjOBD4151CmYM33j4eVgUZzb1uV'
        },
      },
    })
  }

  script.onerror = () => {
    console.error('Coze Chat SDK 加载失败')
  }

  document.body.appendChild(script)
}

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof window !== 'undefined') {
      if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', loadCozeChat)
      } else {
        loadCozeChat()
      }
    }
  },
}