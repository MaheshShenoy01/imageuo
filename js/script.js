$(document).ready(function() {
    var thatImage= null;
    document.getElementById('pro-image').addEventListener('change', readImage, false);
    
    $( ".preview-images-zone" ).sortable();
    
    $(document).on('click', '.image-cancel', function() {
        let no = $(this).data('no');
        $(".preview-image.preview-show-"+no).remove();
    });
    $(document).on('click', '.preview-image', function() {

         var thatImage= $(this).find('img').clone();
         $('.modelPreview .preview-image').remove();
         $(".modelPreview").html(thatImage);
    });
});



var num = 4;
function readImage() {
    if (window.File && window.FileList && window.FileReader) {
        var files = event.target.files; //FileList object
        var output = $(".preview-images-zone");
        var img;
       
        for (let i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.type.match('image')) continue;
           
           
            
            var picReader = new FileReader();
            picReader.onload = (function(theFile) { 
                var image = new Image();
                image.src = theFile.target.result;
            
                image.onload = function() {
                 
                    actualWidth = this.width ;
                   actualHeight = this.height;
                  obj1= convertToInches(actualWidth,actualHeight,76);
                  console.log(obj1)
                  
                   $('.imgWidth').html(parseInt(obj1.wInch)+' x '+parseInt(obj1.hInch))
                };
            });
            picReader.addEventListener('load', function (event) {
                var picFile = event.target;
                var html =  '<div class="preview-image preview-show-' + num + '">' +
                            '<div class="image-cancel" data-no="' + num + '">x</div>' +
                            '<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '"></div>' +
                            '<div class="tools-edit-image" data-toggle="modal" data-target="#myModal"><a href="javascript:void(0)" id="editImage" data-no="' + num + '" class="btn btn-light btn-edit-image"><span class="glyphicon glyphicon-edit"></span></a></div>' +
                            '</div>';
               
                output.append(html);
                num = num + 1;
               
            });

            picReader.readAsDataURL(file);
        }
        $("#pro-image").val('');
    } else {
        console.log('Browser not support');
    }
}

function convertToInches(a,b,c){
                
                this.w=a/c;
                this.h =b/c;
                console.log(w+"X"+h)
                return {
                    wInch : w,
                    hInch : h
                }
            }
      
    