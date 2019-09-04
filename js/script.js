window.onload=function(){
	var searchBox=document.getElementById("searchBox");
	searchBox.onclick=function(){
		var searchBox_text=document.getElementById("searchBox_text");
		var LanguageBox=document.getElementById("LanguageBox");
		var fangda1=document.getElementById("fangda1");
		LanguageBox.style.marginLeft="235px";
		searchBox_text.style.display="none";
		searchBox.style.width="280px";
		searchBox.style.marginRight="0px";
		searchBox.style.borderBottom="1px solid rgb(169,77,175)";
	}
	searchBox.onblur=function(){
		var searchBox_text=document.getElementById("searchBox_text");
		var LanguageBox=document.getElementById("LanguageBox");
		var fangda1=document.getElementById("fangda1");
		var searchBox_v=document.getElementById("searchBox").value;
		LanguageBox.style.marginLeft="315px";
		searchBox_text.style.display="block";
		searchBox.style.width="200px";
		searchBox.style.marginRight="0px";
		searchBox.style.borderBottom="1px solid #979797";
		if(searchBox_v!=0){
			searchBox_text.style.display="none";
		}
	}
	var fangda1=document.getElementById("fangda1");
	fangda1.onmouseover=function(){
		fangda1.src="images/放大镜2.png";
	}
	fangda1.onmouseout=function(){
		fangda1.src="images/放大镜1.png";
	}
	var searchBox_text=document.getElementById("searchBox_text");
	var searchBox_v=document.getElementById("searchBox").value;
	if(searchBox.value!=0){
		searchBox_text.style.display="none";
	}
	//定义全局变量来接受计时器
	var times=null;
	//全局索引
	var index=0;    
	//获取父容器
	var parb=document.getElementById("imgBox");
	var imglist=document.getElementsByClassName("imglist");
	//获取点
	var dianlist=document.getElementsByClassName("dian");
	 dianlist[0].style.backgroundColor="rgb(210,92,197)";
        //默认第0张先出来
        imglist[0].style.opacity=1;
        changeImagezIndex(true);
        times=setInterval(function (){
            changeImagezIndex(false);
        },5000);
        function changeImagezIndex(animte){
          for(var key in imglist) //key 键值
            {
                if(typeof imglist[key]=="object")
                {
                    if(animte)
                    {
                        imglist[key].style.zIndex=imglist.length-key-1;
                    }
                    else{
                        var zindex=imglist[key].style.zIndex;
                        zindex++;
                        if(zindex==3)
                        {
                            index=key;     //???
                            dianlist[key].style.backgroundColor="rgb(210,92,197)";
                            imglist[key].style.opacity=1;
                        }
                        else{
                            dianlist[key].style.backgroundColor="white";
                        }
                        if(zindex>imglist.length-1)
                        {
                            zindex=0;
                            imglist[key].style.opacity=0;
                        }
                        imglist[key].style.zIndex=zindex;
                    }
                }
            }
      }
        parb.addEventListener("click",function (){
            clearInterval(times);
        })
        parb.addEventListener("click",function (){
            times=setInterval(function (){
                changeImagezIndex(false);
            },5000);
        })
        for(var i=0;i<dianlist.Length;i++)
        {
            dianlist[i].index=i;
            dianlist[i].addEventListener("click",function (){
                dianlist[index].style.backgroundColor="white";
                this.style.backgroundColor="rgb(210,92,197)";
                var count=this.index-index>=0?this.index-index:dianlist.length+(this.index-index);
                for(var k=0;k<count;k++)
                {
                    changeImagezIndex(false);
                }
            })
        }

       	var fangdajingBox=document.getElementById("fangdajingBox");
       	var program_search_v_searchBox=document.getElementById("program_search_v_searchBox");
      	fangdajingBox.onmouseover=function(){
      	var fangdajingBox_img=document.getElementById("fangdajingBox_img");
       	fangdajingBox.backgroundColor="#979797";
     	  fangdajingBox_img.src="images/放大镜3.png";
       }
        fangdajingBox.onmouseout=function(){
      	var fangdajingBox_img=document.getElementById("fangdajingBox_img");
       	// fangdajingBox.backgroundColor=rgb(255,255,255);
       	fangdajingBox_img.src="images/放大镜4.png";
       }
       program_search_v_searchBox.onclick=function(){
       	var program_search_v_c=document.getElementById("program_search_v_c");
       	program_search_v_c.style.display="none";
       	program_search_v_searchBox.style.borderBottom="5px solid rgb(227,98,213)"
       }
       program_search_v_searchBox.onblur=function(){
       	var program_search_v_c=document.getElementById("program_search_v_c");
       	if(program_search_v_searchBox.value!=0){
	      	program_search_v_c.style.display="none";
       }
      	else{
      		program_search_v_c.style.display="block";
       }
       program_search_v_searchBox.style.borderBottom="5px solid rgb(24,24,24)";
       	if(program_search_v_searchBox.value!=0){
	      	program_search_v_c.style.display="none";
       }
   }
   // 滚轮事件
       var nav=document.getElementById("nav");
       var sTop=document.documentElement.scrollTop;
      window.onscroll=function(){
        var nav=document.getElementById("nav");
        var sTop=document.documentElement.scrollTop;/*获取当前整个文档向上滚动的距离*/
        var nav_list=document.getElementById("nav_list");
        var nav_list_logo=document.getElementById("nav_list_logo");
        var lunbo=document.getElementById("lunbo");
        if(sTop>140){
          nav.style.position="fixed";
          nav.style.top="0";
          nav.style.left="0";
          nav.style.right="0";
          nav.style.bottom="0";
           nav.style.backgroundColor="#090d47";
           nav_list.style.marginLeft="40px";
           nav_list.style.marginTop="1px";
           nav_list.style.transition="all 0.6s"
           nav_list_logo.style.display="block";
           nav_list.style.fontSize="15px";
          nav.style.zIndex= "150"; 
           toChangeTop();    
  
        }
        else{
           nav.style.position="relative";
           nav.style.top="-630px";
           nav.style.backgroundColor="rgba(39, 36, 32, 0.81)";
          nav_list.style.marginLeft="0px";
           nav_list.style.marginTop="-1px";
           nav_list_logo.style.display="none";
           nav_list.style.fontSize="15px";
           tochangeBottom();
        }
       }
     // 滚轮事件

function toChangeTop(){
    var hideBox_a=document.getElementById("hideBox_a");
    var hideBox_b=document.getElementById("hideBox_b");
    var hideBox_c=document.getElementById("hideBox_c");
    var hideBox_d=document.getElementById("hideBox_d");
    var hideBox_e=document.getElementById("hideBox_e");
    var hideBox_f=document.getElementById("hideBox_f");
    var hideBox_g=document.getElementById("hideBox_g");
      hideBox_a.style.left="152px";
      hideBox_b.style.left="236px";
      hideBox_c.style.left="319px";
      hideBox_d.style.left="373px";
      hideBox_e.style.left="425px";
      hideBox_f.style.left="510px";
      hideBox_g.style.left="593px";
}
function tochangeBottom(){
     var hideBox_a=document.getElementById("hideBox_a");
     var hideBox_b=document.getElementById("hideBox_b");
     var hideBox_c=document.getElementById("hideBox_c");
     var hideBox_d=document.getElementById("hideBox_d");
     var hideBox_e=document.getElementById("hideBox_e");
     var hideBox_f=document.getElementById("hideBox_f");
     var hideBox_g=document.getElementById("hideBox_g");
        hideBox_a.style.left="0px";
        hideBox_b.style.left="84px";
        hideBox_c.style.left="167px";
        hideBox_d.style.left="220px";
        hideBox_e.style.left="273px";
        hideBox_f.style.left="357px";
        hideBox_g.style.left="441px";
}


 
     //菜单的展开与收回
     var nav_big_a=document.getElementById("nav_big_a");
     var nav_big_b=document.getElementById("nav_big_b");
     var nav_big_c=document.getElementById("nav_big_c");
     var nav_big_d=document.getElementById("nav_big_d");
     var nav_big_e=document.getElementById("nav_big_e");
     var nav_big_f=document.getElementById("nav_big_f");
     var nav_big_g=document.getElementById("nav_big_g");
     var nav_list_li=document.getElementsByClassName("nav_list_li");
     var hideBox_a=document.getElementById("hideBox_a");
     var hideBox_b=document.getElementById("hideBox_b");
     var hideBox_c=document.getElementById("hideBox_c");
     var hideBox_d=document.getElementById("hideBox_d");
     var hideBox_e=document.getElementById("hideBox_e");
     var hideBox_f=document.getElementById("hideBox_f");
     var hideBox_g=document.getElementById("hideBox_g");
     var nav=document.getElementById("nav");
     var i;
     var t;
     var k;
     function bgn(){
          nav_big_a.style.height="0px";
          nav_big_b.style.height="0px";
          nav_big_c.style.height="0px";
          nav_big_d.style.height="0px";
          nav_big_e.style.height="0px";
          nav_big_f.style.height="0px";
          nav_big_g.style.height="0px";
      }
      bgn();
     hideBox_a.onclick=function(){
      hideBox_a.style.visibility="hidden";
        hide(nav_big_a);
     }
      hideBox_b.onclick=function(){
     hideBox_b.style.visibility="hidden";
        hide(nav_big_b);
     }
     hideBox_c.onclick=function(){
     hideBox_c.style.visibility="hidden";
        hide(nav_big_c);
     }
     hideBox_d.onclick=function(){
      hideBox_d.style.visibility="hidden";
        hide(nav_big_d);
     }
     hideBox_e.onclick=function(){
       hideBox_e.style.visibility="hidden";
        hide(nav_big_e);
     }
     hideBox_f.onclick=function(){
       hideBox_f.style.visibility="hidden";
        hide(nav_big_f);
     }
     hideBox_g.onclick=function(){
      hideBox_g.style.visibility="hidden";
        hide(nav_big_g);
     }
     function hide(t){
      t.style.visibility="hidden";
     t.style.height="0px";
     }
     function show(k){
      k.style.visibility="visible";
      k.style.height="360px";
      k.style.transition="0.6s";
     }
     function show_a(){
     nav_big_a.style.visibility="visible";
      nav_big_a.style.height="360px";
      nav_big_a.style.transition="0.6s";
      hideBox_a.style.visibility="visible";
      hideBox_a.style.zIndex="1";
       hideBox_b.style.visibility="hidden";
       hideBox_c.style.visibility="hidden";
       hideBox_d.style.visibility="hidden";
       hideBox_e.style.visibility="hidden";
       hideBox_f.style.visibility="hidden";
       hideBox_g.style.visibility="hidden";
     }
      function show_b(){
     nav_big_b.style.visibility="visible";
      nav_big_b.style.height="300px";
      nav_big_b.style.transition="0.6s";
        hideBox_a.style.visibility="hidden";
          hideBox_b.style.visibility="visible";
      hideBox_b.style.zIndex="1";
       hideBox_c.style.visibility="hidden";
       hideBox_d.style.visibility="hidden";
       hideBox_e.style.visibility="hidden";
       hideBox_f.style.visibility="hidden";
       hideBox_g.style.visibility="hidden";
     }
      function show_c(){
    nav_big_c.style.visibility="visible";
      nav_big_c.style.height="360px";
      nav_big_c.style.transition="0.6s";
      hideBox_c.style.visibility="visible";
      hideBox_c.style.zIndex="1";
       hideBox_a.style.visibility="hidden";
       hideBox_b.style.visibility="hidden";
       hideBox_d.style.visibility="hidden";
       hideBox_e.style.visibility="hidden";
       hideBox_f.style.visibility="hidden";
       hideBox_g.style.visibility="hidden";
     }
      function show_d(){
     nav_big_d.style.visibility="visible";
      nav_big_d.style.height="142px";
      nav_big_d.style.transition="0.6s";
       hideBox_d.style.visibility="visible";
      hideBox_d.style.zIndex="1";
       hideBox_a.style.visibility="hidden";
       hideBox_b.style.visibility="hidden";
       hideBox_c.style.visibility="hidden";
       hideBox_e.style.visibility="hidden";
       hideBox_f.style.visibility="hidden";
       hideBox_g.style.visibility="hidden";
     }
      function show_e(){
     nav_big_e.style.visibility="visible";
      nav_big_e.style.height="155px";
      nav_big_e.style.transition="0.6s";
      hideBox_e.style.visibility="visible";
      hideBox_e.style.zIndex="1";
       hideBox_a.style.visibility="hidden";
       hideBox_b.style.visibility="hidden";
       hideBox_c.style.visibility="hidden";
       hideBox_d.style.visibility="hidden";
       hideBox_f.style.visibility="hidden";
       hideBox_g.style.visibility="hidden";
     }
      function show_f(){
     nav_big_f.style.visibility="visible";
      nav_big_f.style.height="190px";
      nav_big_f.style.transition="0.6s";
      hideBox_f.style.visibility="visible";
      hideBox_f.style.zIndex="1";
       hideBox_a.style.visibility="hidden";
       hideBox_b.style.visibility="hidden";
       hideBox_c.style.visibility="hidden";
       hideBox_e.style.visibility="hidden";
       hideBox_d.style.visibility="hidden";
       hideBox_g.style.visibility="hidden";
     }
      function show_g(){
     nav_big_g.style.visibility="visible";
      nav_big_g.style.height="110px";
      nav_big_g.style.transition="0.6s";
      hideBox_g.style.visibility="visible";
      hideBox_g.style.zIndex="1";
       hideBox_a.style.visibility="hidden";
       hideBox_b.style.visibility="hidden";
       hideBox_c.style.visibility="hidden";
       hideBox_e.style.visibility="hidden";
       hideBox_f.style.visibility="hidden";
       hideBox_d.style.visibility="hidden";
     }

        for(i=0;i<nav_list_li.length;i++){
      nav_list_li[0].onclick=function(){
        if(nav_big_a.style.height=="0px"){
            hide(nav_big_b);
            hide(nav_big_c);
            hide(nav_big_d);
            hide(nav_big_e);
            hide(nav_big_f);
            hide(nav_big_g);
            window.setTimeout(function(){show_a()},800);
        }
        else{
          nav_big_a.style.visibility="hidden";
          nav_big_a.style.height="0px";
        }
      }
       nav_list_li[1].onclick=function(){
         if(nav_big_b.style.height=="0px"){     
         hide(nav_big_a);
         hide(nav_big_c);
         hide(nav_big_d);
         hide(nav_big_e);
         hide(nav_big_f);
         hide(nav_big_g);
         window.setTimeout(function(){show_b()},800);
        }

        else{
          nav_big_b.style.visibility="hidden";
          nav_big_b.style.height="0px";
        }
      }
      nav_list_li[2].onclick=function(){
         if(nav_big_c.style.height=="0px"){
           hide(nav_big_a);
           hide(nav_big_b);
           hide(nav_big_d);
           hide(nav_big_e);
           hide(nav_big_f);
           hide(nav_big_g);
           window.setTimeout(function(){show_c()},800);
        }

        else{
          nav_big_c.style.visibility="hidden";
          nav_big_c.style.height="0px";
        }
      }
       nav_list_li[3].onclick=function(){
          if(nav_big_d.style.height=="0px"){
          hide(nav_big_a);
          hide(nav_big_b);
          hide(nav_big_c);
          hide(nav_big_e);
          hide(nav_big_f);
          hide(nav_big_g);
           window.setTimeout(function(){show_d()},800);
        }

        else{
          nav_big_d.style.visibility="hidden";
          nav_big_d.style.height="0px";
        }
      }
      nav_list_li[4].onclick=function(){
          if(nav_big_e.style.height=="0px"){
          hide(nav_big_a);
          hide(nav_big_b);
          hide(nav_big_d);
          hide(nav_big_c);
          hide(nav_big_f);
          hide(nav_big_g);
           window.setTimeout(function(){show_e()},800);
        }

        else{
          nav_big_e.style.visibility="hidden";
          nav_big_e.style.height="0px";
        }
      }
       nav_list_li[5].onclick=function(){
          if(nav_big_f.style.height=="0px"){
            hide(nav_big_a);
            hide(nav_big_b);
            hide(nav_big_d);
            hide(nav_big_e);
            hide(nav_big_c);
            hide(nav_big_g);
             window.setTimeout(function(){show_f()},800);
        }

        else{
          nav_big_f.style.visibility="hidden";
          nav_big_f.style.height="0px";
        }
      }
      nav_list_li[6].onclick=function(){
          if(nav_big_g.style.height=="0px"){
          hide(nav_big_a);
          hide(nav_big_b);
          hide(nav_big_d);
          hide(nav_big_e);
          hide(nav_big_f);
          hide(nav_big_c);
           window.setTimeout(function(){show_g()},800);
        }

        else{
          nav_big_g.style.visibility="hidden";
          nav_big_g.style.height="0px";
        }
      }
       nav_list_li[7].onclick=function(){
            hide(nav_big_a);
            hide(nav_big_b);
            hide(nav_big_d);
            hide(nav_big_e);
            hide(nav_big_c);
            hide(nav_big_g);
            hide(nav_big_f);
             hideBox_a.style.visibility="hidden";
             hideBox_b.style.visibility="hidden";
             hideBox_c.style.visibility="hidden";
             hideBox_e.style.visibility="hidden";
             hideBox_f.style.visibility="hidden";
             hideBox_d.style.visibility="hidden";
             hideBox_g.style.visibility="hidden";
      }
       nav_list_li[8].onclick=function(){
            hide(nav_big_a);
            hide(nav_big_b);
            hide(nav_big_d);
            hide(nav_big_e);
            hide(nav_big_c);
            hide(nav_big_g);
            hide(nav_big_f);
             hideBox_a.style.visibility="hidden";
             hideBox_b.style.visibility="hidden";
             hideBox_c.style.visibility="hidden";
             hideBox_e.style.visibility="hidden";
             hideBox_f.style.visibility="hidden";
             hideBox_d.style.visibility="hidden";
             hideBox_g.style.visibility="hidden";
      }
    
  }
  // 轮播图
  //获取imgList
        var boxList = document.getElementById("boxList");
        //获取页面中所有的img标签
        var boxArr = document.getElementsByClassName("box");
        //设置imgList的宽度
        boxList.style.height = 270*boxArr.length+"px";
        
        
        /*设置导航按钮居中*/
        //获取navDiv
        var buttons = document.getElementById("buttons");
        //获取outer
        var lunbo = document.getElementById("lunbo");
        //设置navDiv的left值
        // navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 + "px";
        
        //默认显示图片的索引
        var index2 = 0;
        //获取所有的a
        var buttons = document.getElementsByClassName("dian");
        //设置默认选中的效果
        buttons[index2].style.backgroundColor = "rgb(210,92,197)";
        
        /*
          点击超链接切换到指定的图片
            点击第一个超链接，显示第一个图片
            点击第二个超链接，显示第二个图片
         * */
        
        //为所有的超链接都绑定单击响应函数
        for(var i=0; i<buttons.length ; i++){
          
          //为每一个超链接都添加一个num属性
          buttons[i].num = i;
          
          //为超链接绑定单击响应函数
          buttons[i].onclick = function(){
            
            //关闭自动切换的定时器
            clearInterval(timer);
            //获取点击超链接的索引,并将其设置为index
            index2 = (4-this.num);
            
            //切换图片
            /*
             * 第一张  0 0
             * 第二张  1 -520
             * 第三张  2 -1040
             */
            //imgList.style.left = -520*index + "px";
            //设置选中的a
            setA();
            
            
            //使用move函数来切换图片
            // move(divList , "top" , 300*index , 20 , function(){
            //  //动画执行完毕，开启自动切换
            //  autoChange();
            // });
            move(boxList , "top" , -300*index2, 20 , function(){
              //动画执行完毕，开启自动切换
              autoChange();
            });
            
          };
        }
        
        
        //开启自动切换图片
        autoChange();
        
        
        //创建一个方法用来设置选中的a
        function setA(){
          
          //判断当前索引是否是最后一张图片
          if(index2 <=0){
            //则将index设置为0
            index2 = boxArr.length - 1;
            
            //此时显示的最后一张图片，而最后一张图片和第一张是一摸一样
            //通过CSS将最后一张切换成第一张
            boxList.style.top = "-1080px";
          }
          
          //遍历所有a，并将它们的背景颜色设置为红色
          for(var i=0 ; i<buttons.length ; i++){
            buttons[i].style.backgroundColor = "";
          }
          
          //将选中的a设置为黑色
          buttons[4-index2].style.backgroundColor = "rgb(210,92,197)";
        };
        
        //定义一个自动切换的定时器的标识
        var timer;
        //创建一个函数，用来开启自动切换图片
        function autoChange(){
          
          //开启一个定时器，用来定时去切换图片
          timer = setInterval(function(){
            
            //使索引自增
            index2--;
            
            // 判断index的值
            index2 %= boxArr.length;
            
            //执行动画，切换图片
            // move(divList , "top" , 300*index , 20 , function(){
            //  //修改导航按钮
            //  setA();
            // });
            move(boxList , "top" , -270*index2, 20 , function(){
              //修改导航按钮
              setA();
            });
            
          },4000);
          
        }
    

}

