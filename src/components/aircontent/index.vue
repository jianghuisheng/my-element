<template>
  <div>
    <el-form
      :inline="true"
      :label-position="labelPosition"
      :model="contentValidateForm"
      ref="contentValidateForm"
      class="demo-ruleForm"
    >
      <!-- <p style="margin-left:10px">一级分类多语名称</p> -->
      <el-form-item label="语言站点：">
        <el-radio-group v-model="radio">
          <el-radio
            v-for="(item, index) in languageList"
            :key="index"
            :label="item"
            >{{ item }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <keep-alive>
          <enquill v-if="radio == '英语'"></enquill>
          <esquill v-else-if="radio == '西语'"></esquill>
          <poquill v-else-if="radio == '葡语'"></poquill>
          <ruquill v-else-if="radio == '俄语'"></ruquill>
          <frquill v-else-if="radio == '法语'"></frquill>
          <dequill v-else-if="radio == '德语'"></dequill>
          <itquill v-else-if="radio == '意语'"></itquill>
          <krquill v-else-if="radio == '韩语'"></krquill>
          <trquill v-else-if="radio == '土耳其语'"></trquill>
          <arquill v-else></arquill>
        </keep-alive>
      </el-form-item>
      <el-form-item class="submitBtns">
        <el-button>取消</el-button>
        <el-button type="primary" @click="contentOnSubmit">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import enquill from "../ue/enquill";
import esquill from "../ue/esquill";
import poquill from "../ue/poquill";
import ruquill from "../ue/ruquill";
import frquill from "../ue/frquill";
import dequill from "../ue/dequill";
import itquill from "../ue/itquill";
import krquill from "../ue/krquill";
import trquill from "../ue/trquill";
import arquill from "../ue/arquill";
import mockData from "./data.js";
export default {
  components: {
    enquill,
    esquill,
    poquill,
    ruquill,
    frquill,
    dequill,
    itquill,
    krquill,
    trquill,
    arquill
  },

  data() {
    return {
      languageList: [
        "英语",
        "西语",
        "葡语",
        "俄语",
        "法语",
        "德语",
        "意语",
        "韩语",
        "土耳其语",
        "阿拉伯语"
      ],
      labelPosition: "right",
      radio: "英语",
      contentValidateForm: {
        enContent: "",
        esContent: "",
        poContent: "",
        ruContent: "",
        frContent: "",
        deContent: "",
        itContent: "",
        krContent: "",
        trContent: "",
        arContent: ""
      }
    };
  },

  methods: {
    getQuillContent() {
      this.contentValidateForm.enContent = localStorage.getItem("enContent");
      this.contentValidateForm.esContent = localStorage.getItem("esContent");
      this.contentValidateForm.poContent = localStorage.getItem("poContent");
      this.contentValidateForm.ruContent = localStorage.getItem("ruContent");
      this.contentValidateForm.frContent = localStorage.getItem("frContent");
      this.contentValidateForm.deContent = localStorage.getItem("deContent");
      this.contentValidateForm.itContent = localStorage.getItem("itContent");
      this.contentValidateForm.krContent = localStorage.getItem("krContent");
      this.contentValidateForm.trContent = localStorage.getItem("trContent");
      this.contentValidateForm.arContent = localStorage.getItem("arContent");
    },
    contentOnSubmit(e) {
      e.preventDefault();
      this.getQuillContent();
      this.$refs["contentValidateForm"].validate(valid => {
        if (valid) {
          alert("submit!");
          this.$axios
            .post("https://wwww.baidu.com", this.contentValidateForm)
            .then(res => {
              console.log(res);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      if (!!this.$refs[formName]) {
        this.$refs[formName].resetFields();
      }
    }
  },

  mounted() {
    // 清空富文本区域存储，读取回显并设置，用于编辑时默认提交用的
    localStorage.removeItem("enContent");
    localStorage.removeItem("esContent");
    localStorage.removeItem("poContent");
    localStorage.removeItem("ruContent");
    localStorage.removeItem("frContent");
    localStorage.removeItem("deContent");
    localStorage.removeItem("itContent");
    localStorage.removeItem("krContent");
    localStorage.removeItem("trContent");
    localStorage.removeItem("arContent");
    console.log(mockData);
    localStorage.setItem("enContent", mockData.encontent);
    localStorage.setItem("esContent", mockData.escontent);
    localStorage.setItem("poContent", mockData.pocontent);
    localStorage.setItem("ruContent", mockData.rucontent);
    localStorage.setItem("frContent", mockData.frcontent);
    localStorage.setItem("deContent", mockData.decontent);
    localStorage.setItem("itContent", mockData.itcontent);
    localStorage.setItem("krContent", mockData.krcontent);
    localStorage.setItem("trContent", mockData.trcontent);
    localStorage.setItem("arContent", mockData.arcontent);
    // this.$axios.get("/static/contentData.json").then(res => {
    // });
  }
};
</script>

<style></style>
