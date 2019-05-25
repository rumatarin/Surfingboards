export default class someSlider {
  constructor() {
    this.$slider = $('_slider');
    this.$sliderItems = $('.slider__items');
    this.$sliderItem = $('.slider__item');
    this.$leftSliderBtn = $('.slider__btn-left');
    this.$rightSliderBtn = $('.slider__btn-right');
    this.$sliderTarget;
    this.$runTimer;
    console.log(this.$sliderItem.length);
    this._events();
    this._getActive();
    this._totalSlide();
    this._slideTiming();
  }

  _events() {
    this.$leftSliderBtn.on('click', () => this._slideLeft());
    this.$rightSliderBtn.on('click', () => this._slideRight());
  }

  _getActive() {
    this.$sliderItem.first().addClass('slider__item-active');
  }

  _totalSlide() {
    $('._totalSlide').text(this.$sliderItem.length);
  }

  _currentSlide(ind) {
    $('._currentSlide').text(ind + 1);
  }

  _slideResponse(elem) {
    this.$sliderItem.removeClass('slider__item-active').eq(elem).addClass('slider__item-active');
  }

  _slideLeft() {
    this.$sliderTarget = $('.slider__item-active').index();
    this.$sliderTarget === 0 ? this.$sliderTarget = this.$sliderItem.length - 1 : this.$sliderTarget = this.$sliderTarget - 1;
    this._slideResponse(this.$sliderTarget);
    this._currentSlide(this.$sliderTarget);
    this._resetTime();
  }

  _slideRight() {
    this.$sliderTarget = $('.slider__item-active').index();
    this.$sliderTarget === this.$sliderItem.length - 1 ? this.$sliderTarget = 0 : this.$sliderTarget = this.$sliderTarget + 1;
    this._slideResponse(this.$sliderTarget);
    this._currentSlide(this.$sliderTarget);
    this._resetTime();
  }

  _autoSlide() {
    this.$sliderTarget = $('.slider__item-active').index();
    this.$sliderTarget === this.$sliderItem.length - 1 ? this.$sliderTarget = 0 : this.$sliderTarget = this.$sliderTarget + 1;
    this._slideResponse(this.$sliderTarget);
    this._currentSlide(this.$sliderTarget);
  }

  _slideTiming() {
    this.$runTimer = setInterval(() => {
      this._autoSlide();
    }, 5000);
  }

  _resetTime() {
    clearInterval(this.$runTimer);
    this.$runTimer = setInterval(() => {
      this._autoSlide();
    }, 5000);
	}
}