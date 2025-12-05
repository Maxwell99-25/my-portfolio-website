  //handling hamburger toggle. 
     const hamburger=document.getElementById('hamburger');
     const menu=document.querySelector('.navbar');
     hamburger.addEventListener('click',() => {
     menu.classList.toggle('show');
     });
     //Handling the Contact button.
    const contactBtn=document.getElementById('contactBtn'); 
    contactBtn.addEventListener('click',()=>{
    window.location.href='contact.html';
    });
    //Handling the resume button
    const viewBtn=document.getElementById("viewBtn");
    const downloadBtn=document.getElementById("downloadBtn");
    const resumeBtn=document.getElementById("resume-Btn");
    const resumeOptions=document.getElementById("options");
    resumeBtn.addEventListener('click', ()=>{
     resumeOptions.classList.toggle("hidden");s
    });
    //handling the Download-resume button.
    downloadBtn.addEventListener('click',()=>{
     const link=document.createElement("a");
     link.href='CV_2025120508433653.pdf';
     link.download='Nsovo-resume';
     link.click();
    });

    //handling the View-resume.
    viewBtn.addEventListener('click',()=>{
    window.open('CV_2025120508433653.pdf','blank');    
    });