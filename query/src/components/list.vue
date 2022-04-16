<template>
  <div class="list_content">
     <div class="list_one">
         <div >
        <img class="list_one_state_icon" src="../assets/increase.png">
         </div>
         <div class="list_one_gname">GeneName:11LL</div>
         <div class="list_one_microname">demo:demo</div>
         <div class="list_button">
                <div class="list_button_table">Table</div>
                <div class="list_button_vis">Vis</div>
         </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.list_content
{
    width: 100%;
    position: absolute;
    top:620px;
}
.list_one
{
    width: 70vw;
    height: 145px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 20px;
    position: relative;
}
.list_one_state_icon
{
     width: 123px;
     height: 123px;
     position: absolute;
     top: 10px;
     left: 30px;
}
.list_one_gname
{
    position: absolute;
    top: 30px;
    left: 170px;
    font-size: 30px;
    color: #9E9E9E;
    letter-spacing: 1px;
    display: block;
}
.list_one_microname
{
    position: absolute;
    top: 75px;
    left: 170px;
    font-size: 30px;
    color: #9E9E9E;
    letter-spacing: 1px;
    display: block;

}
.list_button
{
    position: absolute;
    right: 50px;
    display: flex;
    flex-wrap: nowrap;
    top: 50px;
}
.list_button_table
{
     padding: 10px;
     background: #91b0b8;
     margin-right: 10px;
     border-radius: 10px;
     color: #ffffff;
     letter-spacing: 2px;
}
.list_button_vis
{
     padding: 10px;
     background: #91b0b8;
     border-radius: 10px;
     color: #ffffff;
     letter-spacing: 2px;
}
.list_button_table:hover,.list_button_vis:hover
{
    background: #94bdbf;
}
</style>