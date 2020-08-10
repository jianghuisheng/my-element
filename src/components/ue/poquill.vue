<template>
  <div>
    <!-- 图片上传组件辅助-->
    <el-upload
      class="avatar-uploader"
      :action="serverUrl"
      name="file"
      :headers="header"
      :show-file-list="false"
      list-type="picture"
      :multiple="false"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload"
    >
    </el-upload>

    <quill-editor
      class="editor"
      v-model="content"
      ref="esquill"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
      @ready="onEditorReady($event)"
    >
    </quill-editor>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import mockData from "../aircontent/data.js";

// 工具栏配置
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
  ["blockquote", "code-block"], // 引用  代码块
  [{ header: 1 }, { header: 2 }], // 1、2 级标题
  [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
  [{ script: "sub" }, { script: "super" }], // 上标/下标
  [{ indent: "-1" }, { indent: "+1" }], // 缩进
  // [{'direction': 'rtl'}],                         // 文本方向
  [{ size: ["small", false, "large", "huge"] }], // 字体大小
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
  [{ font: [] }], // 字体种类
  [{ align: [] }], // 对齐方式
  ["clean"], // 清除文本格式
  ["link", "image", "video"] // 链接、图片、视频
];

export default {
  props: {
    // 编辑器的内容
    value: {
      type: String
    },
    // 图片大小
    maxSize: {
      type: Number,
      default: 4000 // kb
    }
  },

  components: {
    quillEditor
  },

  data() {
    return {
      content: this.value,
      quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
      editorOption: {
        theme: "snow", // or 'bubble'
        placeholder: "您想说点什么？po",
        modules: {
          toolbar: {
            container: toolbarOptions,
            // container: "#toolbar",
            handlers: {
              image: function(value) {
                if (value) {
                  // 触发input框选择图片文件
                  document.querySelector(".avatar-uploader input").click();
                } else {
                  this.quill.format("image", false);
                }
              }
              // link: function(value) {
              //   if (value) {
              //     var href = prompt('请输入url');
              //     this.quill.format("link", href);
              //   } else {
              //     this.quill.format("link", false);
              //   }
              // },
            }
          }
        }
      },
      // 这里写你要上传的图片服务器地址
      serverUrl:
        "http://bupload.dhgate.com/fileuploadservlet?isunique=1&functionname=csmg&supplierid=11111111111111f&fileext=*.jpg;*.gif;*.pdf;*.rar;*.doc;*.docx;*.txt;*.jpeg;*.png;*.bmp&folder=/csmsg/uploaddify",
      // 有的图片服务器要求请求头需要有token
      header: {
        // token: sessionStorage.token
      }
    };
  },
  mounted() {
    this.setLocal();
  },
  methods: {
    setLocal() {
      if (!!this.content) {
        localStorage.setItem("poContent", this.content);
      } else {
        localStorage.setItem("poContent", "");
      }
    },
    onEditorBlur() {
      // 失去焦点事件
    },
    onEditorFocus() {
      // 获得焦点事件
    },
    onEditorChange() {
      // 内容改变事件
      this.$emit("input", this.content);
      localStorage.setItem("poContent", this.content);
    },
    onEditorReady(dom) {
      this.content = mockData.pocontent;
    },
    // 富文本图片上传前
    beforeUpload() {
      // 显示loading动画
      this.quillUpdateImg = true;
    },

    uploadSuccess(res, file) {
      console.log(res);
      // res为图片服务器返回的数据
      // 获取富文本组件实例
      let quill = this.$refs.esquill.quill;
      // 如果上传成功
      // if (res.code === 200) {
      if (res.result) {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片  res.url为服务器返回的图片地址
        quill.insertEmbed(
          length,
          "image",
          "http://image.dhgate.com/" + res.l_imgurl
        );
        // 调整光标到最后
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
      // loading动画消失
      this.quillUpdateImg = false;
    },
    // 富文本图片上传失败
    uploadError() {
      // loading动画消失
      this.quillUpdateImg = false;
      this.$message.error("图片插入失败");
    }
  }
};
</script>
