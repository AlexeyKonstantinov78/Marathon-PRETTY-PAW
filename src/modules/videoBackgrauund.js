
export const videoBagraundInit = () => {
  const videoBG = document.querySelectorAll('.video-bg');
  
  const videoSourses = `
    <source src="video/video.webm" type="video/webm">
    <source src="video/video.mp4" type="video/mp4">
  `;
  
  videoBG.forEach((item) => {
    item.innerHTML = videoSourses;
  });
};
