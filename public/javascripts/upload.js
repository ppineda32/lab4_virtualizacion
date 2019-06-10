
    $('#upload').on('click', function () {
      var file = $('input[name=image]')[0].files[0];
      var fileReader = new FileReader();
      fileReader.onloadend = function (e) {
        var arrayBuffer = e.target.result;
        blobUtil.arrayBufferToBlob(arrayBuffer,'image/png').then(function (blob) {
          console.log('here is a blob', blob);
          console.log('its size is', blob.size);
          console.log('its type is', blob.type);
        }).catch(console.log.bind(console));
      };
      fileReader.readAsArrayBuffer(file);
    });