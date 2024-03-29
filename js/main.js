!function(){
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')//获取样式
        let n=0
        let id =setInterval(()=>{
            n+=1
            container.innerHTML=code.substring(0,n)
            styleTag.innerHTML=code.substring(0,n)
            container.scrollTop=container.scrollHeight//滚动的高度=向下滚动的距离
            if(n>=code.length){
                window.clearInterval(id)
                // fn && fn.call()
            }
        },10)
    }
     let code =`.preview{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FEE433;
    }
    .code-wrapper{
        flex: 1;
        height: 50%;
    }
    .preview-wrapper{
        flex:1;
        height: 50%;
    }
    .wrapper{
        width: 100%;
        height: 165px;
        /* border: 1px solid red; */
        position: relative;
    }
    .nose{
        width: 0px;
        height: 0px;
        border: 11px solid black;
        border-color: black transparent transparent transparent;
        border-radius:11px; 
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left:-11px; 
    }
    .eye{
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border-radius:50%;
        border: 2px solid #000000; 
    }
    .eye.left{
        position: absolute;
        right:50%;
        margin-right: 90px;
    }
    .eye.right{
        position: absolute;
        left: 50%;
        margin-left: 90px; 
    }
    .eye::before{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius:50%;
        left: 6px;
        top: -2px;
        border: 2px solid #000;
    }
    .face{
        width: 68px;
        height: 68px;
        background: #FC0D1C;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    .face.left{
        right: 50%;
        margin-right:116px; 
    }
    .face.right{
        left: 50%;
        margin-left:116px; 
    }
    .upperlip{
        height: 20px;
        width:80px;
        border:3px solid black;
        transform: rotate(-15deg);
        position: absolute;
        top: 50px;
        background: #FEE433;
    }
    .upperlip.left{
        right: 50%;
        border-bottom-left-radius:40px 20px;
        border-top:none;
        border-right: none;
    }
    .upperlip.right{
        left:50%;
        border-bottom-right-radius:40px 20px;
        border-top:none;
        border-left:none;
        transform: rotate(15deg);
    }
    
    .lowerlip-wrapper{
        bottom:0;
        position: absolute;
        left:50%;
        margin-left:-150px;
        
        /* border:1px solid red; */
        height: 110px;
        overflow: hidden;
        width: 300px;
    }
    .lowerlip{
        height: 3500px;
        width: 300px;
        background: #990513;
        border-radius:200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom:0;
        overflow: hidden;
    }
    .lowerlip::after{
        content: '';
        position: absolute;
        bottom:-20px;
        width: 100px;
        height: 100px;
        background: #fc4a62;
        left:50%;
        margin-left: -50px;
        border-radius:50px;  
    }`
    writeCode('',code)
}.call()