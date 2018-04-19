$(document).ready(function() {
    var thatImage= null;
   
    document.getElementById('pro-image').addEventListener('change', readImage, false);
    
    $( ".preview-images-zone" ).sortable();
    
    $(document).on('click', '.image-cancel', function() {
        let no = $(this).data('no');
        $(".preview-image.preview-show-"+no).remove();
    });
    $(document).on('click', '.preview-image', function() {
        var height =$(this).find('img').attr('data-width');
        var width  =$(this).find('img').attr('data-height');
        var imgName = $(this).find('img').attr('data-name')
        $('.imgWidth').html(height+" x "+width)
        $('.modal-title').html(imgName)
         var thatImage= $(this).find('img').parent().clone();
         //console.log(thatImage.wrap( "<div class='page-zone'></div>" ))
         $('.modelPreview .preview-image').remove();
         $(".modelPreview").html(thatImage);
    });
        $('[data-toggle="tooltip"]').tooltip(); 
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
                
                  obj1= convertToInches(this.width,this.height,72)
                   var html =  '<div class="preview-image preview-show-' + num + '">' +
                            '<div class="image-cancel" data-no="' + num + '">x</div>' +
                            '<div class="image-zone"><img id="pro-img-' + num + '" src="' + image.src  + '" data-width="' + parseInt(obj1.wInch) + '" data-height="' + parseInt(obj1.hInch) + '" data-name="' + file.name + '"></div>' +
                            '<div class="tools-edit-image" data-toggle="modal" data-target="#myModal"><a href="javascript:void(0)" id="editImage" data-no="' + num + '" class="btn btn-light btn-edit-image"><span class="glyphicon glyphicon-edit"></span></a></div>' +
                            '</div>';
                     output.append(html);
                num = num + 1;
                };
            });
            // picReader.addEventListener('load', function (event) {
            //     var picFile = event.target;
               
            //     // var html =  '<div class="preview-image preview-show-' + num + '">' +
            //     //             '<div class="image-cancel" data-no="' + num + '">x</div>' +
            //     //             '<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '" data-width="' + actualWidth + '"></div>' +
            //     //             '<div class="tools-edit-image" data-toggle="modal" data-target="#myModal"><a href="javascript:void(0)" id="editImage" data-no="' + num + '" class="btn btn-light btn-edit-image"><span class="glyphicon glyphicon-edit"></span></a></div>' +
            //     //             '</div>';
               
            //     // output.append(html);
            //     // num = num + 1;
               
            // });

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
               
                return {
                    wInch : w,
                    hInch : h
                }
            }
      
    