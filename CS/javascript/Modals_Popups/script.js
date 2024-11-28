    // Get modal element 
    const modal= document.getElementById("myModal");
    
    // Get Buttons
    const alertBtn = document.getElementById("alertBtn");
    const openModalButton = document.getElementById("openModalBtn");
    const closeModalButton = document.getElementById("closeModalBtn");
    

    // Open modal on button click
    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Close modal on close button click
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal on outside click
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    //Show alert on button click
    alertBtn.onclick = function() {
        alert("This is a simple alert")
    }
