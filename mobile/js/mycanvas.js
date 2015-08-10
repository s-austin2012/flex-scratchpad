       window.onload = function () {
                // Necessity to run this code only after the web page has been loaded.
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");
                var imageObj = new Image();
                // Callback function called by the imageObj.src = .... line
                //located after this function
                imageObj.onload = function () {
                    // Draw the image only when we have the guarantee 
                    // that it has been loaded
                    context.drawImage(imageObj, 0, 0);
                };
                // Calls the imageObj.onload function asynchronously
                imageObj.src =
                        "https://cloud.githubusercontent.com/assets/4747981/9069005/e5d91d16-3ab4-11e5-88c6-54a6350bd46d.jpg";
            };
