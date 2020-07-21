$(document).ready(function(){
    const listgrp=document.getElementById("lstgrp");
    
    var testlabs = (function() {
        var json = null;
        $.ajax({
          'async': false,
          'global': false,
          'url': "json/test_labs.json",
          'dataType': "json",
          'success': function(data) {
            json = data;
          }
        }); 
        return json;
      })();

    tollnums =  testlabs.data;
    tollnums.forEach(element => { 
    listgrp.innerHTML+=
    `<div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
    <div class="d-flex w-100 justify-content-between">
      <h5><b>${element.name}</b></h5>
    </div>
    <br>
    <p class="mb-1"><i class="fas fa-hashtag" style="margin-right: 15px;"> </i>   ${element.test_type}</p>
    <p class="mb-1"><i class="fas fa-tag" style="margin-right: 15px;"> </i>   ${element.type}</p>
    </div>`;
    });   
});