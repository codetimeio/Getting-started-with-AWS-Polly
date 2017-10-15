<?php 



require 'vendor/autoload.php';

$polly = new Aws\Polly\PollyClient([
    'version' => 'latest',
    'region'  => 'us-west-2',
    'credentials' => array(
        'key'    => 'put-your-key-here',
        'secret' => 'put-your-secret-here',
    )
]);

$text = $_POST['text'];

$result = $polly->synthesizeSpeech([
    'OutputFormat' => 'mp3', // REQUIRED
    'Text' => $text, // REQUIRED
    'VoiceId' => 'Joanna', // REQUIRED
]);
 
$newdata = $result->get('AudioStream');

$myfile = fopen("test.mp3", "w");
fwrite($myfile, $newdata);
fclose($myfile);

echo 'test.mp3';

