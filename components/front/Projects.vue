<template>
  <div class="front-projects">
    <div class="inner-wide">
      <div class="h1 front-projects-header">Программы и проекты</div>

      <div class="row">
        <div class="col-lg-7">
          <div class="front-projects-main">
            <div class="row">
              <div class="col-sm-7">
                <div class="front-projects-main-img"><img src="/images/projects/prj-big.jpg" alt="alt"></div>
              </div>
              <div class="col-sm-5">
                <div class="front-projects-main-title">Точка зрения</div>
                <div class="front-projects-main-descr">
                  <p>«Точка зрения» - информационно-аналитическое ток-шоу. В качестве экспертов выступают профессионалы своего дела: представители разных сфер, областей, возрастов. Люди, которые в обязательном плане отвечают за достоверность информации.</p>
                  <p>Мы даём возможность каждому высказать свою позицию, не навязывая её никому, и говорим зрителям: «Смотрите, думайте, анализируйте». В качестве экспертов выступают профессионалы своего дела: представители разных сфер, областей, возрастов.</p>
                  <a href="#" class="ui-btn">Смотреть видео</a>
                </div>
              </div>
              
            </div>
          </div><!--.main-->
        </div>

        <div class="col-lg-5">
          <div class="front-projects-items">
            <div class="row">
              <div class="col-us-6">
                <div class="front-projects-item">
                  <a href="#" class="front-projects-item-img">
                    <img src="/images/projects/prj-1.png" alt="alt">
                  </a>
                </div>
              </div>

              <div class="col-us-6">
                <div class="front-projects-item">
                  <a href="#" class="front-projects-item-img">
                    <img src="/images/projects/prj-2.png" alt="alt">
                  </a>
                </div>
              </div>

              <div class="col-us-6">
                <div class="front-projects-item">
                  <a href="#" class="front-projects-item-img">
                    <img src="/images/projects/prj-3.png" alt="alt">
                  </a>
                </div>
              </div>

              <div class="col-us-6">
                <div class="front-projects-item">
                  <a href="#" class="front-projects-item-img">
                    <img src="/images/projects/prj-4.png" alt="alt">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.front-projects {
  padding-top: 90px;

  &-main {
    margin-bottom: 40px;
    @include fz(14);

    &-title {
      @include fz(20);
      font-weight: 600;
      margin-bottom: 20px;
      text-transform: uppercase;
    }
    &-descr {
      margin-bottom: 30px;
    }
  }

  &-items {
    margin-top: -15px;

    [class*="col-"] {
      padding-left: 0;
      padding-right: 0;
    }
  }
  &-item {

    &-img {
      display: block;
      padding: 13px;
      border: 2px solid transparent;
      border-radius: 6px;
      transition: border .2s;

      &:hover {
        border-color: $primary;
      }
    }
    img {
      display: block;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    &-main-img {
      margin-bottom: 20px;
    }
  }
}
</style>