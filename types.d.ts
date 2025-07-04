interface IMenu {
  id: string;
  name: string;
  image: string;
  price: number;
  status: boolean;
  admin_id: string;
  category: ICategory;
  category_id: string;
  created_at: string;
  updated_at: string;
}

interface Filters {
  category: string;
}

interface MenuMeta {
  totalMenus: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  filters: Filters;
}

interface MenuApiResponse {
  status: string;
  message: string;
  data: IMenu[];
  meta: MenuMeta;
}

interface OrderMeta {
  totalOrders: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  filters: {
    search?: string;
    sortBy?: string;
    sortOrder?: string;
    tableId?: string;
    status?: string;
    startDate?: string;
    endDate?: string;
  };
}

interface OrderApiResponse {
  status: string;
  message: string;
  data: IOrder[];
  meta: OrderMeta;
}

interface ICategory {
  id: string;
  name: string;
}

interface ITable {
  id: string;
  number: number;
  qr_code: string;
  admin_id: string;
  created_at: string;
  updated_at: string;
}

interface IOrderItem {
  id: string;
  quantity: number;
  price: number;
  note: string;
  order_id: string;
  menu_id: string;
  created_at: string;
  updated_at: string;
  menu: IMenu;
}

type OrderStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "CANCELLED";

interface IOrder {
  id: string;
  customer_name: string;
  total_price: number;
  payment_status: boolean;
  note: string;
  status: OrderStatus;
  table_id: string;
  created_at: string;
  updated_at: string;
  table: ITable;
  orderItems: IOrderItem[];
}

interface INotification {
  id: string;
  message: string;
  read: boolean;
  admin_id: string;
  order_id: string;
  type: "NEW_ORDER" | "ORDER_STATUS_CHANGE" | "PAYMENT_RECEIVED" | "OTHER";
  created_at: string;
  updated_at: string;
  order: IOrder;
}

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  category: {
    id: string;
    name: string;
  };
}
interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

interface ISalesReport {
  id: string;
  date: string;
  total_items_sold: number;
  income: number;
  admin_id: string;
  created_at: string;
  updated_at: string;
  orders: IOrder[];
  admin: {
    username: string;
  };
}

interface IStats {
  completedOrders: number;
  completedOrdersChangePercentage: number;
  ordersChangePercentage: number;
  processingOrders: number;
  salesChangePercentage: number;
  totalOrders: number;
  totalSales: number;
}

interface IWeeklySales {
  [day: string]: number;
}

interface ILocationSetting {
  id: string;
  latitude: number;
  longitude: number;
  radius: number;
  isActive: boolean;
  created_at: string;
  updated_at: string;
}
