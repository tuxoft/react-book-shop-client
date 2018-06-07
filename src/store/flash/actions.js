export const FLASH_SHOW_FLASH = "FLASH_SHOW_FLASH";
export const showFlash = (message, type = "success", autoHide = true, callback = ()=> {}) => {
  return ({
  type: FLASH_SHOW_FLASH,
  payload: {
    message,
    type,
    autoHide,
    callback
  }
})};

export const FLASH_HIDE_FLASH = "FLASH_HIDE_FLASH";
export const hideFlash = () => ({
  type: FLASH_HIDE_FLASH,
});
