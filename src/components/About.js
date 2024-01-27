
import React, { useState, useEffect } from 'react';

const AboutMe = () => {
  // State for controlling the slideshow
  const [slideIndex, setSlideIndex] = useState(0);

  // Effect to handle the slideshow
  useEffect(() => {
    const showSlides = () => {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      setSlideIndex((prevIndex) => (prevIndex + 1 > slides.length ? 1 : prevIndex + 1));
      slides[slideIndex - 1].style.display = "block";
    };

    const intervalId = setInterval(showSlides, 2000);

    return () => {
      // Clear interval on component unmount
      clearInterval(intervalId);
    };
  }, [slideIndex]);

  // Functions for handling manual navigation of slides
  const plusSlides = (offset) => {
    setSlideIndex((prevIndex) => prevIndex + offset);
  };

  const currentSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <div id="about">
              <h1>About Me</h1>
        <p>
            My name is Bernard Otieno, a dedicated IT professional currently pursuing a Bachelors in Business and Information Technology (BBIT) at Strathmore University.
        </p>
        <p>
            With a strong foundation in programming languages such as
        <ul> <li>C++</li>
             <li>Java</li>
             <li>HTML</li>
             <li>PHP</li>
             <li>CSS</li>
             <li>Android Kotlin</li>
             <li>Python</li>
             <li>R</li>
        </ul> 
         
         I bring a versatile skill set to collaborative projects.
        </p>
        <strong>Work Expirience</strong>
        <p>
            My practical experience includes volunteering at the National Spinal Injury Referral Hospital and interning at Kenyatta University Teaching, Referral and Research Hospital. During my internship, I contributed to the development and management of the hospital's website, refining my skills in website design and content management.
        </p>
        <strong>Academia</strong>
        <p>
            In addition to my academic pursuits, I have completed the CS50 Short Program in C++ programming and a Cisco Networking Course at Strathmore.
             
        </p>
        <p>
            I am open to collaborative opportunities that allow me to leverage my technical skills and contribute to innovative projects.
        </p>
        <h2>Hobbies</h2>
        <p>My diverse interests extend to sports such as football, motor-sports, gaming (Key in the konami code... ), and darts.</p>
    </div>
  );
};

export default AboutMe;
