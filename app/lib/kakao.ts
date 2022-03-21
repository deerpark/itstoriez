declare global {
  interface Window {
    Kakao: any;
  }
}

export const checkKaKaoSDK = () => {
  if(!window.Kakao.Channel) {
    window.Kakao.init('c34808e364deec1dd37ab8c69230579e')
  }
}
export const handleClickChatChannel = () => {
  checkKaKaoSDK()
  window.Kakao.Channel.chat({
    channelPublicId: '_qwsxeb',
  })
}
export const handleClickAddChannel = () => {
  checkKaKaoSDK()
  window.Kakao.Channel.addChannel({
    channelPublicId: '_qwsxeb',
  })
}
