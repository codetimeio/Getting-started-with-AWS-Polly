

// THIS IS NOT SECURE ONLY USE FOR PROTOTYPES
AWS.config.accessKeyId = 'put-key-here';
AWS.config.secretAccessKey = 'put-secret-here';
AWS.config.region = 'put your region here';

var polly = new AWS.Polly();

var params = {
  OutputFormat: "mp3", 
  Text: "Hello Trevor, how are you today?", 
  TextType: "text", 
  VoiceId: "Joanna"
 };

 polly.synthesizeSpeech(params, function(err, data) {

   if (err){
    // an error occurred
    console.log(err, err.stack);
   } 
   else {

      var uInt8Array = new Uint8Array(data.AudioStream);
      var arrayBuffer = uInt8Array.buffer;
      var blob = new Blob([arrayBuffer]);

      var audio = $('audio');
      var url = URL.createObjectURL(blob);
      audio[0].src = url;
      audio[0].play(); 
  
  }
 });