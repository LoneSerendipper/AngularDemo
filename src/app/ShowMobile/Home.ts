import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './Home.html',
  styles:[
    `
    :host ::ng-deep .am-accordion .am-accordion-item .am-accordion-header{height:47px;font-size:16px;
    }
    .list-style{
      display: flex;justify-content:flex-end;height:20px;line-height:20px;font-size: 14px;
    }
    .list-item-style{
      display: flex;justify-content: space-between;margin-bottom: 2px;
    }
    `] 

})

export class HomeComponent implements OnInit {
 
  activeKey = [0, 1];
  accordions: Array<any> = [
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
    { title: '西安城市花园小区',CreateTime:'2019-8-15',CreatePeople:'Xiaowu',LocationID:'陕西西安长安区',ProjectType: '住宅区', BuildHeight:'超高层',StructureType:'砌体结构',AreaCovered:'2222㎡',totalamount:'3330万元'},
  ];

hidden: boolean = false;
  fullScreen: boolean = false;
  topFlag: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  tabbarStyle: object = { height: '100%' ,position: 'fixed',width: '100%'};
  selectedIndex: number = 1;

  autoFocus = {
    focusValue: false
  };


  //刷新
  height: number = document.documentElement.clientHeight;
  pageLimit = 20;//初始页面大小
  page = 0;
  state = {
    refreshState: {
      currentState: 'deactivate',
      drag: false
    },
    direction: '',
    endReachedRefresh: false,
    height: 600,
    data: [],
    directionName: 'both up and down'
  };
  dtPullToRefreshStyle = { height: this.state.height + 'px' };

  pullToRefresh(event) {
    if (event === 'endReachedRefresh') {
      console.log('刷新了数据');
    } else {
      console.log('刷新了数据');
    }
  }


  ngOnInit() {
    this.state.data = this.accordions;
  }




  showTabBar(event) {
    event.preventDefault();
    this.hidden = !this.hidden;
  }

  showNextTabBar(event) {
    event.preventDefault();
    const PANE_COUNT = 3;
    if (this.selectedIndex == PANE_COUNT - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
    console.log('selectedIndex: ', this.selectedIndex);
  }

  showFullScreen(event) {
    event.preventDefault();
    this.fullScreen = !this.fullScreen;
    this.tabbarStyle = this.fullScreen
      ? {
          position: 'fixed',
          height: '100%',
          width: '100%',
          top: 0
        }
      : { height: '400px' };
  }

  changePosition(event) {
    event.preventDefault();
    this.topFlag = !this.topFlag;
  }

  tabBarTabOnPress(pressParam: any) {
    console.log('onPress Params: ', pressParam);
    this.selectedIndex = pressParam.index;
  }

  constructor() { }


  onLeftClick(){


  }
  onChange(){}
}
