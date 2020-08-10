<template>
  <div class="Home">
    <div class="btns-wrap">
      <el-button
        type="primary"
        @click="
          resetForm('addValidateForm');
          dialogAdd = true;
        "
        >新增一级分类</el-button
      >
      <el-button type="primary">调整排序</el-button>
      <!-- <el-select v-model="languageFormInline.lantype" placeholder="语言选择">
        <el-option
          v-for="(item, index) in languageList"
          :key="index"
          :value="item"
        ></el-option>
      </el-select> -->
    </div>
    <div class="table-wrap">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="firstType" label="一级分类" width="204">
        </el-table-column>
        <el-table-column prop="tabelShow" label="展示状态" width="204">
        </el-table-column>
        <el-table-column prop="secondType" label="二级分类数量" width="204">
        </el-table-column>
        <el-table-column prop="tableSort" label="排序" width="204">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="204">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClick(scope.row)" type="text" size="small" -->
            <el-button @click="sencondClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button @click="dialogEditor = true" type="text" size="small"
              >编辑</el-button
            >
            <el-button
              @click="
                dialogDelete = true;
                deleteClick(scope.row);
              "
              type="text"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <el-dialog
        title="新增一级分类"
        :visible.sync="dialogAdd"
        :before-close="() => (dialogAdd = false)"
        class="typeDialog"
      >
        <el-form
          :inline="true"
          :label-position="labelPosition"
          :model="addValidateForm"
          ref="addValidateForm"
          class="demo-ruleForm"
        >
          <!-- <p style="margin-left:10px">一级分类多语名称</p> -->
          <el-form-item
            label="分类名称-英语："
            prop="age"
            :rules="addRules.age"
          >
            <el-input
              type="age"
              v-model.number="addValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="分类名称-西语："
            prop="age"
            :rules="addRules.age"
          >
            <el-input
              type="age"
              v-model.number="addValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="分类名称-葡语："
            prop="age"
            :rules="addRules.age"
          >
            <el-input
              type="age"
              v-model.number="addValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="分类名称-俄语："
            prop="age"
            :rules="addRules.age"
          >
            <el-input
              type="age"
              v-model.number="addValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="分类名称-法语："
            prop="age"
            :rules="addRules.age"
          >
            <el-input
              type="age"
              v-model.number="addValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="分类名称-德语："
            prop="age"
            :rules="addRules.age"
          >
            <el-input
              type="age"
              v-model.number="addValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="分类名称-意语："
            prop="age"
            :rules="addRules.age"
          >
            <el-input
              type="age"
              v-model.number="addValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="分类名称-韩语："
            prop="age"
            :rules="addRules.age"
          >
            <el-input
              type="age"
              v-model.number="addValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="分类名称-土耳其语："
            prop="age"
            :rules="addRules.age"
          >
            <el-input
              type="age"
              v-model.number="addValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="分类名称-阿拉伯语："
            prop="age"
            :rules="addRules.age"
          >
            <el-input
              type="age"
              v-model.number="addValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <hr />
          <el-form-item
            label="设置排序："
            class="tableSort"
            prop="age"
            :rules="addRules.age"
          >
            <el-input
              type="age"
              v-model.number="addValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="展示状态："
            class="tableState"
            prop="age"
            :rules="addRules.age"
          >
            <el-radio-group v-model="addValidateForm.resource">
              <el-radio label="展示"></el-radio>
              <el-radio label="隐藏"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item class="submitBtns">
            <el-button @click="dialogAdd = false">取 消</el-button>
            <el-button type="primary" @click="addOnSubmit">确 定</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <el-dialog
        title="编辑一级分类"
        :visible.sync="dialogEditor"
        width="30%"
        :before-close="() => (dialogEditor = false)"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogEditor = false">取 消</el-button>
          <el-button type="primary" @click="dialogEditor = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>

      <el-dialog
        title="删除确认"
        :visible.sync="dialogDelete"
        width="30%"
        :before-close="() => (dialogDelete = false)"
      >
        <span>确认要删除该分类吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogDelete = false">取 消</el-button>
          <el-button type="primary" @click="dialogSureDelete">确 定</el-button>
        </span>
      </el-dialog>
    </div>

    <div class="pagination-wrap">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import mockData from "./data.js";
export default {
  name: "Home",
  data() {
    return {
      languageList: [
        "英语",
        "葡语",
        "俄语",
        "法语",
        "德语",
        "意语",
        "韩语",
        "阿拉伯语",
        "土耳其语"
      ],
      languageFormInline: {
        user: "",
        lantype: "英语"
      },
      labelPosition: "right",
      addValidateForm: {
        age: "",
        resource: ""
      },
      addRules: {
        age: [
          { required: true, message: "年龄不能为空" },
          { type: "number", message: "年龄必须为数字值" }
        ]
      },

      tableData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      // 新增
      dialogAdd: false,
      // 编辑
      dialogEditor: false,
      // 删除
      dialogDelete: false,
      // 二级分类
      isHaveSencondType: 0
    };
  },
  methods: {
    sencondClick(row) {
      console.log(row);
      this.$router.push("/sencondtype");
    },

    /* delete start */
    deleteClick(row) {
      this.isHaveSencondType = row.secondType;
    },
    dialogSureDelete() {
      if (this.isHaveSencondType > 0) {
        this.$message.error("该分类下存在二级分类，禁止删除");
        setTimeout(() => {
          this.dialogDelete = false;
        }, 1000);
      } else {
        this.$message.success("已删除");
        this.dialogDelete = false;
      }
    },
    /* delete end */
    addOnSubmit(e) {
      // e.preventDefault();
      // this.dialogAdd = false;
      this.$refs["addValidateForm"].validate(valid => {
        if (valid) {
          alert("submit!");
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
    },
    getTableData() {
      this.tableData = mockData;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    this.getTableData();
  }
};
</script>

<style scoped lang="scss">
.btns-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .el-select {
    margin-left: 10px;
    margin-right: 70px;
  }
}
.table-wrap {
  width: 1030px;
  margin: 30px auto;
  hr {
    height: 2px;
    border: none;
    border-top: 1px solid #dcdfe6;
  }
  .tableSort {
    margin-top: 20px;
    margin-right: 100px !important;
  }
  .tableState {
    margin-right: 100px !important;
  }
}
.pagination-wrap {
  text-align: right;
  margin-right: 100px;
}
</style>
