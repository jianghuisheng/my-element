<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button @click="resetDateFilter">清除日期过滤器</el-button>
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <el-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%;margin-top:20px"
    >
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="dataList"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址" :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[
          { text: '家', value: '家' },
          { text: '公司', value: '公司' }
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "配置管理",
      dataList: [],
      tableData: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column.property;
      return row[property] === value;
    },
    getData() {
      this.$axios.get("static/tableData.json").then(
        res => {
          console.log(res);
          if (res.status === 200) {
            if (res.data.tableData && res.data.tableData.length > 0) {
              this.tableData = res.data.tableData;

              for (var i = 0; i < this.tableData.length; i++) {
                this.dataList.push({
                  text: this.tableData[i].date,
                  value: this.tableData[i].date
                });
              }
            }
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
</style>
