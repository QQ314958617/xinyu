$(function(){
	var re_name= /^[\u4e00-\u9fa5]{2,16}$/;       //姓名正则
    var re_phone=/^1\d{10}$/;                     //电话正则
    var re_address=/^.{3,50}$/ ;                    //地址正则
    var re_mail=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;  //邮箱正则
//姓名验证
    $('.form_ul li input.name').blur(function(){
         var bt=$(this).parent('li').find('.bt');
    	    if($(this).val()==''){
    	    	   bt.html('*请填写您的姓名');
                // $(this).focus();
                return false;
    	    }else{
    	    	 if(!re_name.test($(this).val())){

    	    	    bt.html('*请填写您的真实姓名');
                   // $(this).focus();
                   return false;	
	    	     }else{
	            	    bt.html(" ");
	                 }                 	
            } 
    });
    //电话验证
   $('.form_ul li input.tel').blur(function(){
      var bt=$(this).parent('li').find('.bt');
   	  if($(this).val()==''){
         bt.html('*请填写您的电话号码');
         // $(this).focus();
         return false;
   	  }else{
   	  	if(!re_phone.test($(this).val())){
   	  		 bt.html('*请填写正确的电话号码');
   	  		// $(this).focus();
   	  		return false;
   	  	}else{
   	  		bt.html(" ");
   	  	}
   	  }
   });
//地址验证
  $('.form_ul li input.address').blur(function(){
  	  var bt=$(this).parent('li').find('.bt');
     if($(this).val()==''){
     	bt.html('*请填写您的地址');
     	// $(this).focus();
     	return false;

     }else{
     	if(!re_address.test($(this).val())){
     		bt.html('*请填写正确的地址');
            // $(this).focus();
            return false;
     	}else{
             bt.html(" ");
     	}
     }
  });
//邮箱
$('.form_ul li input.email').blur(function(){
      var bt=$(this).parent('li').find('.bt');
     if($(this).val()==''){
      bt.html('*请填写您的邮箱');
      // $(this).focus();
      return false;

     }else{
      if(!re_mail.test($(this).val())){
        bt.html('*请填写正确的邮箱');
            // $(this).focus();
            return false;
      }else{
             bt.html(" ");
      }
     }
  });

// 提交验证
$('.submit').click(function(){
    var name=$('.form_ul li input.name');
    var tel=$('.form_ul li input.tel');
    var address=$('.form_ul li input.address');
    var email=$('.form_ul li input.email');
    //提交验证姓名
   if(name.val()==''){
     name.parent('li').find('.bt');
     name.focus();
     return false;
   }else{
    if(!re_name.test(name.val())){
    	alert(1)
      name.parent('li').find('.bt').html('*请填写您的真实姓名');
      name.focus();
      return false;
    }else{
       name.parent('li').find('.bt').html(" ");
    }
   }
   //提交验证电话
   if(tel.val()==''){
     tel.parent('li').find('.bt');
     tel.focus();
     return false;
   }else{
    if(!re_phone.test(tel.val())){
      tel.parent('li').find('.bt').html('*请填写正确的电话号码');
      tel.focus();
      return false;
    }else{
       tel.parent('li').find('.bt').html(" ");
    }
   }
//提交qq验证
if(address.val()==''){
     address.parent('li').find('.bt');
     address.focus();
     return false;
   }else{
    if(!re_address.test(address.val())){
      address.parent('li').find('.bt').html('*请填写正确的QQ号码');
      address.focus();
      return false;
    }else{
       address.parent('li').find('.bt').html(" ");
    }
   }
//提交邮箱验证
if(email.val()==''){
     email.parent('li').find('.bt');
     email.focus();
     return false;
   }else{
    if(!re_mail.test(email.val())){
      emial.parent('li').find('.bt').html('*请填写正确的邮箱');
      emial.focus();
      return false;
    }else{
       email.parent('li').find('.bt').html(" ");
    }
   }
});
//重置功能
$('.reset').click(function(){
    $('.form_ul li .bt').html();
});
//验证结束
})  
