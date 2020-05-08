var custIterator = 0;
var appleIterator = 0;
var custDialogueLines = 
    [
    "Just with my credit card.",

    "Hmm.. really? That actually sounds too good to be true. How would I use it? I don't want to carry around another credit card.",

    "Hmm... using my phone to pay? That doesn't seem so secure. What if my phone gets stolen or lost? Then the thieves have access to my line of credit.",

    "——Just those precautions? What if I get hacked or something?",

    "Hmm... that actually does sound really secure. Can I apply right now? How long does the process take?",

    "Alright. Thanks for your help!"


    ];

var appleDialogueLines = 
    [
       "Oh, okay. Just to let you know, you can also apply for Apple Card today and finance this phone and your AppleCare with 0% APR over the course of 24 months. You'd also get 3% back on this purchase, which would be $20.94 that would be available to you immediately.",

       "You have the option of requesting a titanium Apple Card to be shipped to your house, yes, or you can just use the Wallet app in your iPhone.",
       
       "Well, the good thing with AppleCard is that it's designed to make sure you're the only one who can use it. You authorize every transaction through Face ID or Touch ID.. ——",

       "In addition to that, when you first get the card, a unique device number is created on your phone. It's locked away in the Secure Element. Every purchase you'd make with Apple Pay using your Apple Card would require your device number and a one-time security code. Therefore, every transaction is unique and you don't leave a card number trail.",

       "Not very long at all, sir. Here, let's have you take out your iPhone 6 and navigate to the Wallet App.",

       "",

    ]

    
    var customer = document.querySelector(".customer");
    var apple = document.querySelector(".apple");

    customer.addEventListener("click", function() {
        document.getElementById("customerDialogue").innerHTML = custDialogueLines[custIterator];
        if (custIterator < custDialogueLines.length) {
            custIterator++;
         } else {
             custIterator = 0;
             document.getElementById("customerDialogue").innerHTML = "Hello! I'll be purchasing this new Macbook Air.";
            }

        if (custIterator === 2 | custIterator === 4){
            document.getElementById("old-man").setAttribute("src", "assets/old-man-skeptical.png");
        } else {
            document.getElementById("old-man").setAttribute("src", "assets/old-man.png");
        }

        if (custIterator === 3){
            document.getElementById("old-man").setAttribute("src", "assets/old-man-skeptical-2.png");
        }

        if (custIterator === 5){
            document.getElementById("old-man").setAttribute("src", "assets/old-man-reasonable.png");
        }

        if (custIterator === 6){
            document.getElementById("old-man").setAttribute("src", "assets/old-man-happy.png");
        }
       }
);

    apple.addEventListener("click", function(){
        document.getElementById("appleDialogue").innerHTML = appleDialogueLines[appleIterator];
        if (appleIterator < appleDialogueLines.length) {
            appleIterator++;
        } else {
            appleIterator = 0;
            document.getElementById("appleDialogue").innerHTML = "Great! Have you thought about purchasing AppleCare+ with your new device?";
        }

        if (appleIterator === 1){
            document.getElementById("appleMe").setAttribute("src", "assets/apple-me-thinking.png");
        }

        if (appleIterator === 3){
            document.getElementById("appleMe").setAttribute("src", "assets/apple-me-explaining.png");
        }


        if (appleIterator === 4){
            document.getElementById("appleMe").setAttribute("src", "assets/apple-me-clocking.png");
        }

        if (appleIterator === 5){
            document.getElementById("appleMe").setAttribute("src", "assets/apple-me-owned.png");
        }

        if (appleIterator === 6){
            document.getElementById("appleMe").setAttribute("src", "assets/apple-me-winking.png");
        }
    });


