// write js code here if required

function updateTimer() {
            const now = new Date();
            
            const day = now.getDate();
            const month = now.getMonth() + 1; // Months are 0-indexed
            const year = now.getFullYear();
            
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            
            // Format the timer string
            const timerString = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
            
            // Display in the paragraph tag
            document.getElementById('timer').textContent = timerString;
        }
        
        // Update timer immediately
        updateTimer();
        
        // Update timer every second
        setInterval(updateTimer, 1000);