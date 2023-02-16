import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    DatePicker,
    RadioGroup,
    RadioButton,
    Radio,
    Steps,
    Step,
    Table,
    TableColumn,
    Card,
    Row,
    Col,
    Pagination,
    Dialog,
    Message,
    MessageBox,
    Image
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(DatePicker)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Image)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm