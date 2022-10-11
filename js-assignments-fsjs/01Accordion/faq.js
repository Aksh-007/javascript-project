const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
buttonShow = document.querySelector(".show_btn");
const faqs = [];

function showFaq() {

}

function createFaq(item) {
  //Faq creation outer divison
  let faq = document.createElement('div');
  // faq.className ="faq";
  faq.classList.add('faq')
  faq.setAttribute('id', '');

  // console.log(faq);

  //Faq header created  
  let faqHeader = document.createElement('div');
  faqHeader.className = "faq_header";
  console.log(faqHeader);

  // now create H3 element
  let h3 = document.createElement('h3');

  //now create button 
  let button = document.createElement('button');
  button.className = "show_btn";
  button.textContent = "+";


  // Now append the thing in Html
  accordianBody.append(faq);
  faq.appendChild(faqHeader);
  faqHeader.appendChild(h3);
  faqHeader.appendChild(button);
  accordianBody.append()

  //now creating paragraph tag 
  let paragraph = document.createElement('p');
  paragraph.className = "hidden";
  //append p to faq division
  faq.appendChild(paragraph);
}

//calling event on + or button click



function btnStatusUpdate() {

}

createFaq();
