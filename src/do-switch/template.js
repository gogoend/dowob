function getTemplate(){
    return `
    <style>
        /* 公共样式 */
        :host {
            position: relative;
            display: inline-block;
        }
        .switch-area{
            position: relative;
            display: inline-block;
            margin: 4px 0;
        }
        .switch-bg{
            transition: 0.25s ease background-color;
            border-radius: 999px;
            width: 40px;
            height: 20px;
        }
        .switch-thumb{
            transition: 0.25s ease left;
            box-sizing: border-box;
            border-radius: 999px;
            background-color: #fff;
            position: absolute;
            display: block;
            width: 20px;
            height: 20px;
            border: 4px solid #0088ff
        }
        .status-flag{
            opacity: 0;
            position: absolute;
            left: 0;
        }

        .status-flag:not(:checked)+.switch-area .switch-bg{
            background-color: #ccc;
        }
        .status-flag:not(:checked)+.switch-area .switch-thumb{
            left: 0;
        }
        .status-flag:checked+.switch-area .switch-bg{
            background-color: #0ff;
        }
        .status-flag:checked+.switch-area .switch-thumb{
            left: calc(100% - 20px);
        }   
    </style>
    <div id="el">
        <input type="checkbox" id="switch-flag" class="status-flag" />
        <label class="switch-area" for="switch-flag">
            <div class="switch-bg">
                <i class="switch-thumb"></i>
            </div>
        </label>
    </div>
    `
    }
    
    export default getTemplate