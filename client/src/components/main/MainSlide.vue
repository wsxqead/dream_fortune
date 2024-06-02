<template>
  <swiper :autoplay="{ delay: 2000 }" pagination :loop="true">
    <swiper-slide>
      <div class="slide-content slide1">
        <img src="https://storage.googleapis.com/dreamproject_20201201/asset/banner/fortunebanner1.jpg" alt="운세 이미지">
        <h2>당신의 하루를 밝혀줄 오늘의 운세</h2>
        <p>미래를 알고 싶으신가요? 우리의 운세가이드와 함께하세요</p>
        <button @click="onclickAction">지금 확인하기</button>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-content slide2">
        <img src="https://storage.googleapis.com/dreamproject_20201201/asset/banner/fortunebanner2.jpg" alt="사랑 이미지">
        <h2>사랑의 운세</h2>
        <p>사랑에 관한 조언과 예측을 받아보세요</p>
        <button @click="onclickAction">사랑 운세 확인</button>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-content slide3">
        <img src="https://storage.googleapis.com/dreamproject_20201201/asset/banner/fortunebanner3.jpg" alt="직업 이미지">
        <h2>직업 운세</h2>
        <p>직장에서의 성공을 위한 길을 찾아보세요</p>
        <button @click="onclickAction">직업 운세 확인</button>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  name: 'MainSlide',
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    async onclickAction() {
      alert("준비중입니다.")
    }
  }
};
</script>

<style scoped>
  .slide-content {
    position: relative;
    text-align: center;
    padding: 2rem;
    display: table;
    margin: 0 auto;
  }

  .slide-content h2 {
    display: inline-block;
    position: absolute;
    margin: 1rem 0;
    color: #fff;
  }

  .slide1 h2 {
    top: 5rem;
    left: 8rem;
  }

  .slide2 h2 {
    top: calc(50% - 65px);
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .slide3 h2 {
    top: 5rem;
    right: 4rem;
  }

  .slide-content p {
    display: inline-block;
    position: absolute;
    color: #fff;
  }

  .slide1 p {
    top: 8rem;
    left: 8rem;
  }

  .slide2 p {
    top: calc(50% - 20px);
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .slide3 p {
    top: 8rem;
    right: 4rem;
  }

  .slide-content button {
    position: absolute;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .slide-content button:hover {
    background-color: #0056b3;
  }

  .slide1 button {
    top: 12rem;
    left: 8rem;
  }

  .slide2 button {
    top: calc(50% - -50px);
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .slide3 button {
    top: 12rem;
    right: 4rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media  screen and (max-width:1024px) {
    .slide1 h2 {
      top: 4rem;
      left: 6rem;
    }

    .slide3 h2 {
      top: 4rem;
      right: 4rem;
    }

    .slide1 p {
      top: 7rem;
      left: 6rem;
    }

    .slide3 p {
      top: 7rem;
      right: 4rem;
    }

    .slide1 button {
      top: 11rem;
      left: 6rem;
    }

    .slide3 button {
      top: 11rem;
      right: 4rem;
    }
  }

  @media screen and (max-width: 768px) {
    .slide-content h2 {
      font-size: 1.25rem;
    }

    .slide1 h2 {
      top: 3rem;
      left: 4rem;
    }

    .slide2 h2 {
      top: calc(50% - 65px);
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .slide3 h2 {
      top: 4rem;
      right: 4rem;
    }

    .slide-content p {
      font-size: 0.8rem;
    }

    .slide1 p {
      top: 6rem;
      left: 4rem;
      font-size: 0.8rem;
    }

    .slide2 p {
      top: calc(50% - 20px);
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .slide3 p {
      top: 7rem;
      right: 4rem;
    }

    .slide1 button {
      top: 9rem;
      left: 4rem;
    }

    .slide2 button {
      top: calc(50% + 40px);
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .slide3 button {
      top: 10rem;
      right: 4rem;
    }
  }
</style>
