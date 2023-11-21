<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

    *{
        font-family: Helvetica;
        padding: 0; 
        margin: 0;
        box-sizing: border-box;
    }

    #home {
        width: 100%;
        height: 100%;
    }

    .container {
        display: flex;
    }

    .texto {
        width: 80%;
        height: 100%;
        display: flex;
        height: 100vh;
    }

    textarea {
        width: 100%;
        background-color: #282C34;
        font-family: monospace;
        color: #fff;
        border: none;
        padding: 15px;
        font-size: 17px;
        resize: none;
        outline: none;
        line-height: 24.9px;
    }

    .info {
        background-color: #374151;
        display: flex;
        width: 275px;
        height: 100vh;
        justify-content: center;
    }

    .infocontainer {
        width: 100%;
        padding: 20px;
    }

    .btnNovo {
        text-align: center;
        margin-top: 130px;
    }

    #novo {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size: 15px;
    }

    #novo:hover {
        background-color: #545d6d;
        padding: 15px;
        border-radius: 5px;
    }

    p {
        font-size: 16px;
        color: #D1D5DB;
        padding: 2px;
    }

    .btn {
        margin-top: 60px;
        width: 100%;
        height: 40px;
        background-color: #5f52f0;
        border: none;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }

    .btn:hover {
        background-color: #4338CA;
    }

    .line-numbers {
        padding: 15px;
        z-index: 1;
        background-color: #282C34;
        color: #fff;
        line-height: 25px;
    }

    #logo {
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }

    span {
        color: #fff;
        border: 1px solid #000;
        padding: 10px;
        margin-right: 10px;
        border-radius: 7px;
        background-color: #1E293B;
        font-family: monospace;
        font-size: 16px;
    }

    #gitContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 290px;
    }

    #git {
        color: #9CA3AF;
        text-decoration: none;;
        text-align: center;
        margin-top: 5px;
        font-size: 16px;
    }

    #git:hover {
        text-decoration: underline;
    }

    #gitImg {
        width: 27px;
        display: flex;
        margin-right: 10px;
        justify-content: center;
        align-content: center;
        text-align: center;
        cursor: pointer;
    }

    .btnIcon,
    .btnIconNew,
    .btnIconEdit,
    .btnIconDel {
        text-align: center;
        width: 17px;
        margin-right: 10px;
    }

    .btnIconNew {
        width: 15px;
    }

    .btnIconEdit {
        width: 19px;
    }

    .btnIconDel {
        margin-right: 9px;
    }

    @media (max-width: 769px) {
        .container {
            display: contents;
        }
        .texto {
            margin: 0;
            width: 100%;
            height: 610px;
        }
        .info {
            width: 100%;
            height: 250px;
            padding-top: 0;
            justify-content: start;
        }
        .btnNovo {
            text-align: start;
            margin-bottom: 5px;
            margin-top: 20px;
        }
        p {
            font-size: 14px;
            margin-top: 10px;
        }
        select {
            height: 27px;
        }
        .btn {
            width: 50%;
            margin-top: 30px;
            height: 30px;
            font-size: 14px;
            border-radius: 3px;
        }
        .btnContainer {
            display: flex;
            justify-content: center;
        }
        #logo,
        span {
            margin-top: 0;
        }
        #gitContainer {
            margin-top: 40px;
            justify-content: flex-end;
        }
        .btnIcon {
            width: 14px;
        }
        #novo {
            padding: 8px;
        }
        #novo:hover {
            padding: 8px;
        }
    }

</style>
