<!DOCTYPE html>
<html>
<head>
	<title>Ego Menu</title>
	<style>
        * {
            transition: all 0.4s ease;
        }
		body {
			background-color: #333;
			color: #fff;
			font-family: Arial, sans-serif;
			font-size: 16px;
			line-height: 1.5;
			padding: 0;
			margin: 0;
			text-align: center;
		}
		
        h1 {
            font-size: 2em;
            margin-top: 2em;
            margin-bottom: 1em;
            color: #dddddd;
            text-shadow: 0 0 2px white;
            background-color: #0000002b;
            top: 0;
            position: relative;
            margin: 0;
            padding: 7mm;
            box-shadow: 0 0px 3vmin 1mm black;
            border-radius: 2mm;
        }
        h1:hover {
            transform: scale(1.03) skewX(5deg);
            text-shadow: 0 0 10px #ffffffbf, -5px 5px 0px #000000bf !important;
            letter-spacing: 0.3mm;
            box-shadow: 0 0px 5vmin 1mm black !important;
        }
		
        h2 {
            font-size: 2.5em;
            margin-top: 1em;
            margin-bottom: 1em;
            text-shadow: -1px 1px black;
        }
        h2:hover {
            font-size: 2.5em;
            margin-top: 1em;
            margin-bottom: 1em;
            text-shadow: -5px 5px black, -5px 5px 20px black;
            transform: translate(1mm,-1mm) skewX(5deg) scale(1.03);
            letter-spacing: 0.43mm;
        }
		
        .features {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 2em;
            flex-direction: row;
            align-content: center;
            align-items: center;
            gap: 2vmax;
            padding-left: 5vmax;
            padding-right: 5vmax;
        }
		
        .feature {
            background-color: #444444a3;
            border-radius: 1vmin;
            margin: 0.5em;
            padding: 1em;
            text-align: left;
            width: 20vmax;
            box-shadow: inset 1vmin -1vmin 0px 0.5mm #00000042;
        }
        .feature:hover {
            transform: translate(1mm, -2mm);
            box-shadow: inset 1vmin -1vmin 0px 0.5mm #00000042, -1vmin 1vmin 0px 0mm #000000, -3vmin 3vmin 20px 0mm #0000003d !important;
            position: relative;
        }
		
        .feature h3 {
            font-size: 1.2em;
            margin-top: 0;
            margin-bottom: 0.5em;
        }
		.feature h3:hover {
            transform: translate(1mm, -1mm) scale(1.03) skewX(5deg);
            text-shadow: -3px 3px 0 black !important;
        }
        .feature p {
            margin-top: 0;
            margin-bottom: 0.5em;
            font-size: 2vmin;
        }
        .feature p:hover {
            transform: translate(1mm, -1mm) scale(1.03) skewX(5deg);
            text-shadow: -3px 3px 0 black !important;
        }

        #get-ego {
            background-color: #203e13;
            border: none;
            border-radius: 1vmin;
            color: #bdffb5;
            cursor: pointer;
            font-size: 2em;
            margin: 1em auto;
            padding: 0.7em 1.9em;
            outline: none;
            box-shadow: inset 1vmin -1vmin 0px 0.5mm #00000042;
        }
        #get-ego:hover {
            background-color: #1ea80e;
            transform: scale(1.03);
            box-shadow: inset 1vmin -1vmin 0px 0.5mm #00000042, -1vmin 1vmin 0px 0mm #000000, -3vmin 3vmin 20px 0mm #0000003d !important;
            color: #ffffff;
        }
        #ego-source-code {
            background-color: #35701c;
            border: none;
            border-radius: 1vmin;
            color: #bdffb5;
            cursor: grab;
            font-size: 2em;
            margin: 1em auto;
            padding: 0.4em 0.7em;
            outline: none;
            box-shadow: inset 1vmin -1vmin 0px 0.5mm #00000042;
        }

        #ego-source-code:hover {
            background-color: #35701c;
            box-shadow: inset 1vmin -1vmin 0px 0.5mm #00000042, -1vmin 1vmin 0px 0mm #000000, -3vmin 3vmin 20px 0mm #0000003d !important;
            transform: scale(1.03) translate(1mm, -1mm);
        }

        #install-instructions {
          background-color: #222;
          color: #fff;
          font-size: 1.6em;
          padding: 5em 1em;
        }
        #install-instructions h2 {
            color: #baffbc;
            font-size: 2.5em;
            margin-bottom: 0.6em;
            text-shadow: -2px 2px black;
            margin-top: -1em;
        }
        ol#instruction-holder {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: center;
            align-items: flex-start;
            row-gap: 1vmax;
            margin: 0;
            list-style-type: disc;
            padding-left: 5vmax;
            padding-right: 5vmax;
        }
        ol#instruction-holder:hover {
            transform: translate(1mm, -1mm) scale(1.01) skewX(0);
            text-shadow: -3px 3px 0 black;
        }
        li#OneInstruction {
            text-align: left;
            padding: 3mm;
        }
        li#OneInstruction:hover {
            transform: translate(1mm, -1mm) skewX(5deg) scale(1.03);
            text-shadow: -3px 3px 0 black;
        }
	</style>
</head>
<body>
	<h1>Ego Menu</h1>
	
	<h2>Features:</h2>
	<div class="features">
		<div class="feature">
			<h3>Easy "install"</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
		</div>
		
		<div class="feature">
			<h3>Multi-use</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
		</div>
		
		<div class="feature">
			<h3>Hides away</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
		</div>
		
		<div class="feature">
			<h3>Chatroom Integration</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
		</div>
		
		<div class="feature">
			<h3>Endless games</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
		</div>
	</div>

  <button id="get-ego" onclick="scrollToInstall()">Get Ego</button>

  <div id="install-instructions">
    <h2>Installation Instructions</h2>
    <ol id="instruction-holder">
        <li id="OneInstruction">Press CTRL+SHIFT+B on Windows/Linux or COMMAND+SHIFT+B on Mac to show the bookmarks bar at the top of your browser window.</li>
        <li id="OneInstruction">Drag the "Drag Me!" button from below to the bookmarks bar. The installation is complete.</li>
        <button id="ego-source-code" draggable="true" ondragstart="event.dataTransfer.setData('text/plain', buttonSrc)">Drag Me!</button>
        <li id="OneInstruction">Click on the bookmark you just created to activate the Ego Menu on the current page. The Ego Menu popup should appear when you hover over the bottom left corner of the website.</li>
        <li id="OneInstruction">Note that if you navigate to a new page, you might need to activate the menu again using the bookmark. Also, please note that the Ego Menu may not work on some strict websites due to security reasons.</li>
    </ol>

</div>




  <script>
    let buttonSrc;
  
    fetch('https://raw.githubusercontent.com/yeahbread/Ego-Menu-Bookmarklets/main/Menu.js')
      .then(response => response.text())
      .then(code => {
        buttonSrc = 'javascript:' + code;
        const egoButton = document.querySelector('#ego-source-code');
        egoButton.setAttribute('href', buttonSrc);
      })
      .catch(error => console.log(error));
  </script>

  
  <script>
    function scrollToInstall() {
      var installInstructions = document.getElementById('install-instructions');
      installInstructions.scrollIntoView({behavior: 'smooth'});
    }
  </script>

</body>
</html>
