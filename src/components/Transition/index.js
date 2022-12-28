const Transition = (effect = "fade-in",once = "true") => {
    return {
      'data-aos': effect,
      'data-aos-offset':"200",
      'data-aos-delay':"50",
      'data-aos-duration':"1000",
      'data-aos-easing':"ease-in",
      'data-aos-mirror':"true",
      'data-aos-once': once,
      'data-aos-anchor-placement':"bottom"
    }
  }

  export { Transition }