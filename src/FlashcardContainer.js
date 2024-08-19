import React, { useState } from "react";
import Flashcard from "./Flashcard";

function FlashcardContainer() {
  const flashcards = [
    { question: 'What is "Yes" in Japanese?', answer: "Hai" },
    { question: 'What is "No" in Japanese?', answer: "Lie" },
    {
      question: 'What is "What is your name?" in Japanese?',
      answer: "Namae wa nan des ka",
    },
    {
      question: 'What is "I am" in Japanese?',
      answer: "Watashi wa",
    },
    {
      question: 'What is "I came from" in Japanese?',
      answer: "kara Kimashita",
    },
    {
      question: 'What is "What is this?" in Japanese?',
      answer: "Kore wa nan des ka",
    },
    {
      question: 'What is "How much?" in Japanese?',
      answer: "Ikura des ka",
    },
    {
      question: 'What is "Can I get this one?" in Japanese?',
      answer: "Kore kudasai",
    },
    {
      question: 'What is "Please" in Japanese?',
      answer: "Onegaishimas",
    },
    {
      question: 'What is "Good morning" in Japanese?',
      answer: "Ohayoo gozaimas",
    },
    {
      question: 'What is "Good afternoon" in Japanese?',
      answer: "Kon’nichiwa",
    },
    {
      question: 'What is "Thank You" in Japanese?',
      answer: "Arigatoo Gozaimas",
    },
    {
      question: 'What is "I am sorry" in Japanese?',
      answer: "Sumimasen",
    },
    {
      question: 'What is "Dinner" in Japanese?',
      answer: "Yoru-gohan",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function nextFlashcard() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  }

  function prevFlashcard() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
    );
  }

  return (
    <div className="flashcard-container">
      <Flashcard flashcard={flashcards[currentIndex]} />
      <div className="navigation">
        <button onClick={prevFlashcard}>Previous</button>
        <button onClick={nextFlashcard}>Next</button>
      </div>
    </div>
  );
}

export default FlashcardContainer;
