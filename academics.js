const navLinks = document.getElementById('links');

function toggleMenu() {
    navLinks.classList.toggle("show");
}
    var acc = document.getElementsByClassName("accordion");

    //accordion
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("activate");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
//tab
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
      // Remove active from all tabs
      for (let j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('activate');
      }
  
      // Add active to clicked tab
      tabs[i].classList.add('activate');
  
      // Hide all content
    for (let k = 0; k < contents.length; k++) {
        contents[k].classList.remove('activate');
      }
  
      // Show clicked content by matching tab number
      const tabId = 'tab' + (i + 1); // Assuming tabs are in order (tab1, tab2, tab3, etc.)
      document.getElementById(tabId).classList.add('activate');
    
    });
}
