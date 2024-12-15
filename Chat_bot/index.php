<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Bot</title>

    <link rel="stylesheet" href="css/chat.css">
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>


<body>
    <!-- CHAT BAR BLOCK -->
  <div class="chat-bar-collapsiblee">
        <button id="chat-button" type="button" class="collapsiblee">
        <i id="chat-icon" style="color: #fff;" class="fa-regular fa-comments"></i>
          </button>
        <div class="content">
        
            <div class="chat-header">
           
                <div id="chat-header" class="card-header"> Ally </div>
                <img src="../../assets/img/Ally.png" id="mi-imagen">
            </div>
               
            <div class="full-chat-block">
                <!-- Message Container -->
                <div class="outer-container">
                    <div class="chat-container">
                        <div id="chatbox">
                            <h5 id="chat-timestamp"></h5>
                            <p id="botStarterMessage" class="botText"><span>Cargando</span></p>
                            </div>
                            <div class="chat-bar-input-block">
                            <div id="userInput">
                            <input id="textInput" class="input-box" type="text" name="msg" placeholder="Presiona enter para enviar">
                            <p></p>
                            </div>
                            <div class="chat-bar-icons">
                                <i id="chat-icon" class="fa fa-fw fa-send" onclick="sendButton()"></i>
                                <i id="chat-icon" style="color: rgb(20, 220, 37);" class="fa-brands fa-whatsapp" onclick="heartButton()"></i>
                        
                            </div>
                        </div>
                        <div id="chat-bar-bottom">
                        <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="scripts/responses.js"></script>
<script src="scripts/chat.js"></script>

</html>