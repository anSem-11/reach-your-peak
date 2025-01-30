class ReachYourPeakController {
  constructor() {
    this.circleTextEl = document.querySelector('.ready__content_text');
    this.buttonPlayEl = document.querySelector('.hero__play-button');
    this.videoEl = document.querySelector('.hero__video');
    this.playingClass = '_playing';
  }

  togglePlayVideo() {
    if (this.videoEl.classList.contains(this.playingClass)) {
      this.videoEl.pause();
      this.videoEl.classList.remove(this.playingClass);
    } else {
      this.videoEl.classList.add(this.playingClass);
      this.videoEl.play();
    }
  }

  handleVideoEnd() {
    setTimeout(() => {
      this.videoEl.classList.remove(this.playingClass);
      this.videoEl.currentTime = 0;
    }, 1000);
  }

  init() {
    this.buttonPlayEl.addEventListener('click', e => this.togglePlayVideo(e));
    this.videoEl.addEventListener('click', e => this.togglePlayVideo(e));
    this.videoEl.addEventListener('ended', e => this.handleVideoEnd(e));
  }
}