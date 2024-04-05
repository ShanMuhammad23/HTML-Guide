import React from 'react'

function AudioVideo() {
  return (
    <div className='container p-4'>
    <h1>HTML Audio and Video Tags</h1>

    <h2 className="text-success">1. What is the HTML &lt;audio&gt; tag?</h2>
    <p>
      The &lt;audio&gt; tag is used to embed audio content, such as music or sound effects, into an HTML document.
      It supports various audio formats like MP3, WAV, and OGG, and provides controls for playing, pausing, and adjusting the volume of the audio.
    </p>

    <h2 className="text-success">2. How to use the &lt;audio&gt; tag?</h2>
    <p>
      To embed audio in an HTML document, use the &lt;audio&gt; tag with the src attribute specifying the URL of the audio file.
      Additional attributes like controls, autoplay, loop, and preload can be used to control the playback behavior.
     <h4>Example: &lt;audio src="audio.mp3" controls&gt;&lt;/audio&gt;</h4> 
    </p>

    <h2 className="text-success">3. What is the HTML &lt;video&gt; tag?</h2>
    <p>
      The &lt;video&gt; tag is used to embed video content, such as movies or video clips, into an HTML document.
      It supports various video formats like MP4, WebM, and OGG, and provides controls for playing, pausing, seeking, and adjusting the volume of the video.
    </p>

    <h2 className="text-success">4. How to use the &lt;video&gt; tag?</h2>
    <p>
      To embed video in an HTML document, use the &lt;video&gt; tag with the src attribute specifying the URL of the video file.
      Additional attributes like controls, autoplay, loop, and preload can be used to control the playback behavior.
      <h4>Example: &lt;video src="video.mp4" controls&gt;&lt;/video&gt;</h4>
    </p>

    <h2 className="text-success">5. What are the supported file formats for audio and video?</h2>
    <p>
      Commonly supported audio formats include MP3, WAV, and OGG, while commonly supported video formats include MP4, WebM, and OGG.
      It's recommended to provide multiple file formats to ensure compatibility across different web browsers and devices.
    </p>

    <h2 className="text-success">Conclusion</h2>
    <p>
      The &lt;audio&gt; and &lt;video&gt; tags in HTML allow developers to seamlessly integrate audio and video content into web pages.
      By understanding how to use these tags and their attributes, you can enhance the multimedia experience of your website and provide engaging content to your users.
    </p>
  </div>
  )
}

export default AudioVideo
