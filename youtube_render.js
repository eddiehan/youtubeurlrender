            //turn youtube standard url into div container
           function renderYoutubeTag( renderHtml ) {
                var pattern = new RegExp(/(www\.)?(youtube\.com\/)?(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([0-9A-Za-z_-]{10}[048AEIMQUYcgkosw])/, 'g');
                renderHtml = renderHtml.replace(pattern, '<div data-youtube-id="$4" class="youtubePreview" style="width:80%;height:100%;position: relative;"></div>'); 
                return renderHtml;
            }
            //turn youtube standard url into div container and put the preview image into it
            function renderYoutubeLazyLoad(htmlContent){
                var pattern = new RegExp(/(www\.)?(youtube\.com\/)?(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([0-9A-Za-z_-]{10}[048AEIMQUYcgkosw])/, 'g');
                var youtubeLazyload = '<div data-youtube-id="$4" class="youtubePreview" style="width:100%;max-height:315px;position: relative;"><img src="//i.ytimg.com/vi/$4/hqdefault.jpg"></div>';
                renderHtml = htmlContent.replace(pattern, youtubeLazyload); 
                return renderHtml;
            }
            //turn Youtube URL into streamming player
            function renderYoutubeUrl(htmlContent) {
                $('.youtubePreview').each(function(key, dom){
                    this.dataset.youtubeId;
                    this.innerHTML = '<img src="//i.ytimg.com/vi/' + this.dataset.youtubeId + '/hqdefault.jpg" style="float: left;">';
                    this.innerHTML += '<span style="cursor:  pointer;width: 100%;background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8BAMAAAADCSC/AAAAJFBMVEVMaXEAAAAAAAAAAAAAAADb29szMzP///+6urrz8/OWlpZnZ2fzXe86AAAADHRSTlMAKlGCmemm/9f3yLYMKNyhAAAA00lEQVR4Aa3WtRkDMQxA4cAEgT7YBwcIeIVw6xX8GdrAEJf2Rrj9woyvkOrfDFLqFPmO+hqdSuoWNfUz2ldXUH+idXYZ9TfKJ1j/Dweww3OXRQL7B9glcAhHPo6dZbDJpnicZJ3BQarL4JBDBeMVjim0Kwp9DKE1CYTWaQhtoNBuKbQLCu2GQh9DaH0CoTUaQus0hDai0C6kYSS8GKNlN9zHwpdiIXxxg/DjMonwB7AS+KRYyP+4/LPH6QMnJJzicNLkaZgldloq4OKDlzO8QMIl1x7m048r9nkEpwAAAABJRU5ErkJggg==\')no-repeat center center;height: 100%;position: absolute;left: 0;"></span><div style="clear:both;"></div>';
                })
                $('.youtubePreview').on('click', function(dom){
                    var youtubeId = $(this).data('youtube-id');
                    $(this).find('img').fadeOut('slow');

                    var iframe = document.createElement( "iframe" );
                    iframe.setAttribute( "frameborder", "0" );
                    iframe.setAttribute( "allowfullscreen", "" );
                    iframe.setAttribute( "style", "width:100%;height:315px;" );
                    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ youtubeId +"?rel=0&controls=1&showinfo=0&autoplay=1" );
                    this.innerHTML = "";
                    this.appendChild( iframe );
                })
            }