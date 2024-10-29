import { r as reactExports, j as jsxRuntimeExports, Z } from "./react-Co2L6_bH.js";
import { c as createRoot } from "./react-dom-Dx1DRd70.js";
import { _ as _t, n, I as Ie } from "./react-hot-toast-Cw0Nld0X.js";
import { r as react } from "./@material-tailwind-Bv71m92r.js";
import { L as Link, u as useSearchParams, c as createBrowserRouter, R as RouterProvider } from "./react-router-dom-Wo6_IhFV.js";
import { H as HiSearch, F as FaTimes, A as AiOutlineUser, a as AiOutlineOrderedList, b as AiOutlineLogout, c as FaTrash, M as MdAddShoppingCart, d as MdOutlineCelebration, I as IoIosArrowForward, e as MdRemoveShoppingCart, f as FaShoppingCart, g as MdArrowDropDown, h as FaBars, i as FaChevronDown, j as FaSearch, k as FaRegHeart, l as FaUser, m as FaSignInAlt, n as FaUserPlus, S as SlArrowRight, B as BiSolidCategory, o as FaWhatsapp, p as FaAngleUp, q as FaEnvelope, r as FaPhone, s as FaTicketAlt, t as FaMapMarkerAlt, u as FaTwitter, v as FaLinkedin, w as FaGoogle, x as FaPinterestP, y as FaInstagram, z as FaFacebookF, C as FaRegEyeSlash, D as FaRegEye, E as FaEyeSlash, G as FaEye, J as FaAngleLeft, K as FaAngleRight, L as FaMinus, N as FaPlus, O as FaHeart, P as FaXmark, Q as FaStar, R as AiFillStar, T as AiOutlineStar, U as FiX, V as FaFilter, W as MdArrowForwardIos, X as TbSortAscending2, Y as FiUpload, Z as FaTruck, _ as FaShieldAlt, $ as FaUndo, a0 as FaCheckCircle, a1 as FaBoxOpen, a2 as FaComment, a3 as FaShippingFast, a4 as FaLock, a5 as FaUndoAlt, a6 as FaCertificate, a7 as BiCategory, a8 as FaUserCircle, a9 as FaShoppingBag, aa as FaHome, ab as FaTag, ac as FaCamera, ad as IoEyeSharp, ae as FaInfoCircle, af as FaEdit, ag as FaPlusCircle, ah as AiOutlineCopy, ai as AiOutlineWhatsApp, aj as AiOutlineMail, ak as AiOutlineShareAlt, al as AiFillEye, am as AiFillDelete, an as FaSyncAlt, ao as FaFire, ap as FaDollarSign, aq as FaArrowLeft, ar as FaDownload } from "./react-icons-C1t51GPY.js";
import { f as fetchBaseQuery, c as createApi, a as createSlice, b as configureStore } from "./@reduxjs-C1I2CF5y.js";
import { c as useNavigate, O as Outlet, d as useLocation, f as useParams } from "./react-router-Cv131NKv.js";
import { p as propTypesExports, P as PropTypes } from "./prop-types-C9IysjhM.js";
import { u as useDispatch, a as useSelector, P as Provider_default } from "./react-redux-lfApecQ8.js";
import { a as axios } from "./axios-Cl7A0Ixg.js";
import { H as Helmet, a as HelmetProvider } from "./react-helmet-async-CMFohsko.js";
import { u as useForm, b as useFormContext, C as Controller, F as FormProvider } from "./react-hook-form-D12KCbut.js";
import { t } from "./@hookform-BT_xc3YY.js";
import { z, o as objectType, n as numberType, s as stringType } from "./zod-C_AxMujj.js";
import { P as PhoneInput } from "./react-phone-input-2-VuCy0kJD.js";
import { C as Carousel } from "./react-multi-carousel-pVgLzx0u.js";
import { R as Rating, T as TablePagination } from "./@mui-CVswJy7g.js";
/* empty css                     */
import { b as buildExports } from "./react-lazy-load-image-component-Di4sKGOs.js";
import { w as withAutoplay, A as AwesomeSlider } from "./react-awesome-slider-CEcdF--e.js";
import { _ as _default } from "./react-images-uploading-BS79L5N6.js";
import { U as Ue } from "./react-international-phone-CTb4SPRc.js";
import "./@floating-ui-4Y5N-uvO.js";
import "./aria-hidden-CVJM-MhR.js";
import "./tabbable-BX5NpjS7.js";
import "./scheduler-K__oi9SH.js";
import "./goober-BmfOThNE.js";
import "./classnames-IlWZ2xM_.js";
import "./tailwind-merge-kDstss16.js";
import "./deepmerge-BJxtk3_n.js";
import "./framer-motion-eqDwq4TR.js";
import "./tslib-CrxKFx1j.js";
import "./hey-listen-a0xrDGjh.js";
import "./style-value-types-bW3mb0AH.js";
import "./popmotion-CJvGBFY5.js";
import "./framesync-3qtSxmQR.js";
import "./@motionone-D6QGPJHo.js";
import "./material-ripple-effects-DWpM_9L4.js";
import "./@remix-run-DLjN2IOv.js";
import "./redux-BVmEM6oV.js";
import "./immer-TUpMGnGJ.js";
import "./redux-thunk-DPdFfTcd.js";
import "./reselect-1m4dqkLs.js";
import "./use-sync-external-store-D9wPRBrm.js";
import "./react-fast-compare-BuLb0aIe.js";
import "./invariant-DZlgrJT-.js";
import "./shallowequal-ht6het_r.js";
import "./react-is-pggmGDbv.js";
import "./clsx-DgYk2OaC.js";
import "./@emotion-DGR3yIm-.js";
import "./hoist-non-react-statics-BxdQBvuA.js";
import "./@babel-CsoD1rjR.js";
import "./stylis-DfY99bj4.js";
import "./react-transition-group-DHpl4dsY.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const logo = "" + new URL("vista-app-logo-BXncRvSK.png", import.meta.url).href;
const FLASHDEALS_URL = "/admin/flash-deals";
const CATEGORIES_URL = "/admin/categories";
const BRANDS_URL = "/admin/brands";
const CUSTOMERS_URL = "/user/customers";
const WISHLIST_URL = "/user/wishlists";
const ORDERS_URL = "/transaction/orders";
const PRODUCTS_URL = "/seller/products";
const PRODUCT_REVIEW_URL = "/user/reviews";
const VENDORS_URL = "/seller/vendors";
const keys = {
  BUCKET_URL: "https://vistamart.s3.ap-southeast-2.amazonaws.com/",
  BASE_URL: "http://127.0.0.1:3000",
  DEFAULT_IMG: "https://www.proclinic-products.com/build/static/default-product.30484205.png"
};
const baseQuery = fetchBaseQuery({
  baseUrl: `${keys.BASE_URL}/api/v1`,
  prepareHeaders: (headers, { getState }) => {
    const userInfo = localStorage.getItem("userInfo");
    const user = JSON.parse(userInfo);
    if (user) {
      headers.set("Authorization", `Bearer ${user == null ? void 0 : user.accessToken}`);
    }
    return headers;
  }
});
const apiSlice = createApi({
  baseQuery,
  credentials: "include",
  tagTypes: [
    "Product",
    "Category",
    "Brand",
    "Order",
    "User",
    "Customer",
    "Vendor",
    "WishList"
  ],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({})
});
const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => {
        return {
          url: PRODUCTS_URL,
          params: query
        };
      }
    }),
    getProductDetails: builder.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`
      }),
      keepUnusedDataFor: 5
    }),
    getProductBySlug: builder.query({
      query: (slug) => ({
        url: `${PRODUCTS_URL}/slug/${slug}`
      }),
      keepUnusedDataFor: 5
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: `${PRODUCTS_URL}`,
        method: "POST"
      }),
      invalidatesTags: ["Product"]
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["Products"]
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `/api/upload`,
        method: "POST",
        body: data
      })
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: "DELETE"
      }),
      providesTags: ["Product"]
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: PRODUCT_REVIEW_URL,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Product"]
    }),
    getTopRatedProducts: builder.query({
      query: () => {
        return {
          url: PRODUCTS_URL,
          params: `sort=-rating&limit=20`
        };
      },
      keepUnusedDataFor: 5
    }),
    getLatestProducts: builder.query({
      query: () => `${PRODUCTS_URL}?sort=-createdAt`,
      keepUnusedDataFor: 5
    }),
    getFeaturedProducts: builder.query({
      query: () => `${PRODUCTS_URL}?isFeatured=true`,
      keepUnusedDataFor: 5
    }),
    getFeaturedDeals: builder.query({
      query: () => `/feature-deals`,
      keepUnusedDataFor: 5
    }),
    getProductSuggestions: builder.query({
      query: (query) => `${PRODUCTS_URL}/search?q=${query}`,
      keepUnusedDataFor: 5
    }),
    getFlashDeals: builder.query({
      query: () => `${FLASHDEALS_URL}`,
      keepUnusedDataFor: 5
    }),
    searchProducts: builder.query({
      query: ({ query, page = 1, limit = 10 }) => `/api/search?query=${query}&page=${page}&limit=${limit}`
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL
      })
    })
  })
});
const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopRatedProductsQuery,
  useGetFeaturedProductsQuery,
  useGetFeaturedDealsQuery,
  useGetLatestProductsQuery,
  useGetProductSuggestionsQuery,
  useGetFlashDealsQuery,
  useSearchProductsQuery,
  useGetAllProductsQuery,
  useGetProductBySlugQuery
} = productsApiSlice;
const SearchBar = () => {
  const [query, setQuery] = reactExports.useState("");
  const [showSuggestions, setShowSuggestions] = reactExports.useState(false);
  const navigate = useNavigate();
  const { data: suggestions, isFetching } = useGetAllProductsQuery();
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setShowSuggestions(inputValue.trim().length > 0);
  };
  const handleClearInput = () => {
    setQuery("");
    setShowSuggestions(false);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`);
      setShowSuggestions(false);
    }
    setQuery("");
  };
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name);
    setShowSuggestions(false);
    navigate(`/products/${suggestion.slug}`);
  };
  const filteredSuggestions = query ? suggestions == null ? void 0 : suggestions.doc.filter(
    (product) => product.name.toLowerCase().startsWith(query.toLowerCase())
  ) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSearch, className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "w-full py-2 px-4 rounded-r-none rounded border outline-none focus:border-primary-400 text-gray-900 transition-all ease-in",
          type: "search",
          autoComplete: "off",
          placeholder: "Search for items...",
          value: query,
          onChange: handleInputChange
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "bg-primary-500 text-white py-[11px] px-4 outline-none rounded rounded-l-none hidden md:block",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiSearch, { size: 20 })
        }
      ),
      query && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handleClearInput,
          className: "absolute right-2 top-2 md:hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTimes, {})
        }
      )
    ] }),
    showSuggestions && query && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-full mt-1 w-full bg-white border rounded shadow-lg z-10", children: [
      isFetching && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-2", children: "Loading..." }),
      filteredSuggestions && filteredSuggestions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-5", children: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-none p-0 m-0", children: filteredSuggestions.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "li",
        {
          className: "p-2 hover:bg-gray-100 cursor-pointer",
          onClick: () => handleSuggestionClick(product),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-gray-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(HiSearch, { className: "text-inherit" })
          ] })
        },
        product._id
      )) })
    ] })
  ] });
};
const UserAvatar = "" + new URL("user-avatar-0Fj6ekKl.jpg", import.meta.url).href;
let initialState$2 = {};
if (typeof localStorage !== "undefined") {
  initialState$2 = {
    userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
  };
}
const authSlice = createSlice({
  name: "auth",
  initialState: initialState$2,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      const expirationTime = (/* @__PURE__ */ new Date()).getTime() + 30 * 24 * 60 * 60 * 1e3;
      localStorage.setItem("expirationTime", expirationTime);
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.clear();
    }
  }
});
const { setCredentials, logout } = authSlice.actions;
const authReducer = authSlice.reducer;
const customerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    customerLogin: builder.mutation({
      query: (data) => ({
        url: `${CUSTOMERS_URL}/login`,
        method: "POST",
        body: data
      })
    }),
    customerRegister: builder.mutation({
      query: (data) => ({
        url: `${CUSTOMERS_URL}/register`,
        method: "POST",
        body: data
      })
    }),
    customerOTPVerification: builder.mutation({
      query: (data) => ({
        url: `${CUSTOMERS_URL}/otp/verify`,
        method: "POST",
        body: data
      })
    }),
    customerSubscribe: builder.mutation({
      query: (data) => ({
        url: `/api/subscribers`,
        method: "POST",
        body: JSON.stringify(data)
      })
    }),
    customerForgetPassword: builder.mutation({
      query: (email) => ({
        url: `${CUSTOMERS_URL}/forgot-password`,
        method: "POST",
        body: email
      })
    }),
    customerLogout: builder.mutation({
      query: (token) => ({
        url: `${CUSTOMERS_URL}/logout`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }),
    customerProfile: builder.mutation({
      query: (data) => ({
        url: `${CUSTOMERS_URL}/profile`,
        method: "PUT",
        body: data
      })
    }),
    getCustomers: builder.query({
      query: () => ({
        url: CUSTOMERS_URL
      }),
      providesTags: ["Customer"],
      keepUnusedDataFor: 5
    }),
    deleteCustomer: builder.mutation({
      query: (customerId) => ({
        url: `${CUSTOMERS_URL}/${customerId}`,
        method: "DELETE"
      })
    }),
    getCustomerDetails: builder.query({
      query: (id) => ({
        url: `${CUSTOMERS_URL}/${id}`
      }),
      keepUnusedDataFor: 5
    }),
    updateCustomer: builder.mutation({
      query: (data) => {
        return {
          url: `${CUSTOMERS_URL}/${data.customerId}`,
          method: "PUT",
          body: data,
          formData: true
        };
      },
      invalidatesTags: ["Customer"]
    })
  })
});
const {
  useCustomerLoginMutation,
  useCustomerLogoutMutation,
  useCustomerRegisterMutation,
  useCustomerProfileMutation,
  useCustomerOTPVerificationMutation,
  useGetCustomersQuery,
  useDeleteCustomerMutation,
  useUpdateCustomerMutation,
  useGetCustomerDetailsQuery,
  useCustomerSubscribeMutation,
  useCustomerForgetPasswordMutation
} = customerApiSlice;
const ProfileMenu = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = reactExports.useState(false);
  const [customerLogout] = useCustomerLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuRef = reactExports.useRef(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = (link) => {
    setIsMenuOpen(false);
    navigate(link);
  };
  const logoutHandler = () => {
    var _a;
    try {
      const userInfo = localStorage.getItem("userInfo");
      const user2 = JSON.parse(userInfo);
      dispatch(logout());
      customerLogout(user2 == null ? void 0 : user2.accessToken);
      _t.success("Logout Successfully");
      window.location.reload();
    } catch (err) {
      _t.error(((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || err.error);
    }
  };
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return user ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: menuRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: toggleMenu,
        className: "flex items-center gap-2 p-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "h-8 w-8 object-contain rounded-full",
              src: (user == null ? void 0 : user.image) ? `http://localhost:3000/${user == null ? void 0 : user.image}` : UserAvatar,
              alt: user.firstName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block text-sm text-gray-900", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Hello, ",
              user.firstName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dashboard" })
          ] })
        ]
      }
    ),
    isMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => closeMenu(`/profile/profile-info`),
          className: "flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AiOutlineUser, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Profile" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => closeMenu("/profile/my-orders"),
          className: "flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AiOutlineOrderedList, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Orders" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: logoutHandler,
          className: "flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AiOutlineLogout, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Logout" })
          ]
        }
      )
    ] })
  ] }) : null;
};
ProfileMenu.propTypes = {
  user: propTypesExports.PropTypes.object.isRequired
};
const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
const updateCart = (state) => {
  state.subTotal = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  state.totalDiscount = addDecimals(
    state.cartItems.reduce(
      (acc, item) => acc + (item.discountAmount || 0) * item.qty,
      0
    )
  );
  state.totalQty = state.cartItems.reduce((acc, item) => acc + item.qty, 0);
  state.totalShippingPrice = addDecimals(
    state.cartItems.reduce(
      (acc, item) => acc + (item.shippingCost * item.qty || 0),
      0
    )
  );
  state.taxPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.taxAmount, 0)
  );
  state.totalPrice = (Number(state.subTotal) + Number(state.totalShippingPrice) + Number(state.taxPrice) - Number(state.totalDiscount)).toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
let initialState$1 = {};
if (typeof localStorage !== "undefined") {
  initialState$1 = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {
    cartItems: [],
    totalQty: 0,
    shippingAddress: {},
    billingAddress: {},
    paymentMethod: "",
    vendors: []
  };
}
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState$1,
  reducers: {
    addToCart: (state, action) => {
      const { ...item } = action.payload;
      const vendor = item.userId;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map(
          (x) => x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      const existVendor = state.vendors.find((x) => x === vendor);
      if (!existVendor) {
        state.vendors = [...state.vendors, vendor];
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    saveBillingAddress: (state, action) => {
      state.billingAddress = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCartItems: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    // NOTE: here we need to reset state for when a user logs out so the next
    // user doesn't inherit the previous users cart and shipping
    resetCart: (state) => initialState$1
  }
});
const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  saveBillingAddress,
  savePaymentMethod,
  clearCartItems,
  resetCart
} = cartSlice.actions;
const cartSliceReducer = cartSlice.reducer;
const getUploadUrl = async (type, folder) => {
  try {
    const query = {
      fileType: type.split("/")[1],
      folder
    };
    const response = await axios.get(
      `${keys.BASE_URL}/api/v1/image/upload`,
      {
        params: query
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching upload URL: ", error);
    throw new Error("Failed to get upload URL");
  }
};
const uploadImageToS3 = async (uploadUrl, file) => {
  try {
    await axios.put(uploadUrl, file, {
      headers: {
        "Content-Type": file.type
      }
    });
  } catch (error) {
    console.error("Error uploading image", error);
    throw new Error("Failed to upload image");
  }
};
const deleteUploadedImages = async (keys2) => {
  try {
    await axios.delete(`${keys2.BASE_URL}/api/v1/image/delete-images`, {
      data: { keys: keys2 }
    });
  } catch (error) {
    console.error("Error deleting images", error);
    throw new Error("Failed to delete images");
  }
};
const formatPrice = (value) => {
  return Number(value).toLocaleString("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};
const CartViewItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center bg-gray-50 justify-around border-b p-2",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: (item == null ? void 0 : item.thumbnail) ? `${item.thumbnail}` : keys.DEFAULT_IMG,
            alt: item.name,
            className: "w-16 h-16 object-contain mr-4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", children: item.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-700", children: [
            "Rs.",
            formatPrice(item == null ? void 0 : item.price)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-4 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "qty: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.qty })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeFromCartHandler(item._id),
              className: "text-inherit cursor-pointer py-2",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTrash, { className: "text-sm text-red-300 ml-2 hover:text-red-400" })
            }
          )
        ] })
      ]
    },
    item._id
  );
};
const CartView = () => {
  const cart = useSelector((state) => state.cart);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row w-96 items-center shadow-sm bg-primary-100 p-4 m-3 rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MdAddShoppingCart, { className: "h-6 w-6 text-gray-800" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: " ml-3 text-center text-gray-800", children: "Shopping Cart" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: cart && (cart == null ? void 0 : cart.totalQty) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base text-primary-400 flex justify-center items-center gap-2 text-center font-semibold mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MdOutlineCelebration, { className: "w-6 h-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "You have Saved Rs.",
          formatPrice(cart == null ? void 0 : cart.totalDiscount),
          "!"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `flex flex-col justify-between  ${(cart == null ? void 0 : cart.totalQty) > 3 ? "overflow-y-scroll h-64 custom-scrollbar" : "overflow-y-hidden"}`,
          children: cart == null ? void 0 : cart.cartItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(CartViewItem, { item }, item._id))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold mr-2", children: "Subtotal:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-lg text-primary-400", children: [
            "Rs.",
            formatPrice(cart == null ? void 0 : cart.totalPrice)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/cart",
            className: "border flex justify-between items-center gap-2 border-gray-200 py-2 px-4",
            children: [
              "Expand Cart",
              /* @__PURE__ */ jsxRuntimeExports.jsx(IoIosArrowForward, {})
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full text-center btn primary-btn ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/checkout-details", children: "Proceed To Checkout" }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MdRemoveShoppingCart, { className: "h-16 w-16 text-gray-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-4", children: "Your cart is empty" })
    ] }) })
  ] }) });
};
const CartIcon = () => {
  var _a;
  const [openMenu, setOpenMenu] = reactExports.useState(false);
  const cart = useSelector((state) => state.cart);
  const totalItems = ((_a = cart == null ? void 0 : cart.totalQty) == null ? void 0 : _a.toString()) || "0";
  const totalPrice = (cart == null ? void 0 : cart.totalPrice) * 1 || 0;
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(react.Menu, { open: openMenu, handler: setOpenMenu, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(react.MenuHandler, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-row items-center bg-transparent",
        onClick: toggleMenu,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(react.Badge, { content: totalItems, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            react.IconButton,
            {
              variant: "text",
              "aria-label": "Shopping Cart",
              className: "rounded-full border-none",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaShoppingCart, { className: "h-5 w-5 text-primary-500" })
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "hidden md:block text-center w-24 border-none lg:flex flex-col text-sm items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: "My cart" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-900 flex-center gap-2 font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Rs. ",
                totalPrice == null ? void 0 : totalPrice.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MdArrowDropDown, {})
            ] })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(react.MenuList, { className: "overflow-visible md:grid shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartView, {}) })
  ] });
};
const wishlistsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWishListById: builder.query({
      query: (userId) => ({
        url: `${WISHLIST_URL}/${userId}`
      }),
      keepUnusedDataFor: 5
    }),
    addWishList: builder.mutation({
      query: (data) => ({
        url: `${WISHLIST_URL}/add`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["WishList"]
    }),
    deleteWishList: builder.mutation({
      query: () => ({
        url: `${WISHLIST_URL}/remove`,
        method: "DELETE"
      }),
      providesTags: ["WishList"]
    }),
    deleteWishlistProduct: builder.mutation({
      query: (data) => ({
        url: `${WISHLIST_URL}/products/${data.productId}`,
        method: "DELETE",
        body: data
      }),
      providesTags: ["WishList"]
    })
  })
});
const {
  useAddWishListMutation,
  useGetWishListByIdQuery,
  useDeleteWishListMutation,
  useDeleteWishlistProductMutation
} = wishlistsApiSlice;
const MobileSidebar = () => {
  const [open, setOpen] = Z.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = Z.useState(false);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const handleLinkClick = () => {
    closeDrawer();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: openDrawer, children: isDrawerOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(FaTimes, { className: "h-2 w-2 stroke-2" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FaBars, { className: "h-6 w-6 stroke-2" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      react.Drawer,
      {
        open: isDrawerOpen,
        onClose: closeDrawer,
        className: "w-[60%] px-3",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(react.Card, { shadow: false, className: "h-100vh w-full p-2 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(react.IconButton, { variant: "text", size: "lg", onClick: closeDrawer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTimes, { className: "h-4 w-4 " }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(react.List, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/",
                className: "mr-auto font-normal w-full",
                onClick: handleLinkClick,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.ListItem, { className: "py-2 px-4", children: "Home" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/categories",
                className: "mr-auto font-normal w-full",
                onClick: handleLinkClick,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.ListItem, { className: "py-2 px-4", children: "All Categories" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/brands",
                className: "mr-auto font-normal w-full",
                onClick: handleLinkClick,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.ListItem, { className: "py-2 px-4", children: "All Brands" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/products?discount",
                className: "mr-auto font-normal w-full",
                onClick: handleLinkClick,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.ListItem, { className: "py-2 px-4", children: "Discount Products" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/vendors",
                className: "mr-auto font-normal w-full",
                onClick: handleLinkClick,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.ListItem, { className: "py-2 px-4", children: "All Vendors" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              react.Accordion,
              {
                open: open === 2,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FaChevronDown,
                  {
                    strokeWidth: 2.5,
                    className: `mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`
                  }
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(react.ListItem, { className: "p-0", selected: open === 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    react.AccordionHeader,
                    {
                      onClick: () => handleOpen(2),
                      className: "border-b-0 p-2",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mr-auto text-base font-normal", children: "Vendor Zone" })
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(react.AccordionBody, { className: "py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(react.List, { className: "p-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/vendor/auth/registration",
                        onClick: handleLinkClick,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.ListItem, { children: "Become a Vendor" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/vendor/auth/login",
                        onClick: handleLinkClick,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.ListItem, { children: "Vendor Login" })
                      }
                    )
                  ] }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-2 border-blue-gray-50" })
          ] })
        ] })
      }
    )
  ] });
};
const NavbarSticky = () => {
  var _a, _b, _c;
  const [openMenu, setOpenMenu] = reactExports.useState(false);
  const [isSticky, setIsSticky] = reactExports.useState(false);
  const [isSearchOpen, setIsSearchOpen] = reactExports.useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const { data: wishList } = useGetWishListByIdQuery((_a = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _a._id, {
    skip: !((_b = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _b._id)
  });
  const totalWishListItems = ((_c = wishList == null ? void 0 : wishList.products) == null ? void 0 : _c.length.toString()) || "0";
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = window.innerHeight * 0.25;
    setIsSticky(scrollPosition > threshold);
  };
  reactExports.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleMouseEnter = () => {
    setOpenMenu(true);
  };
  const handleMouseLeave = () => {
    setOpenMenu(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `w-full z-40 transition-all duration-500 ease-in-out py-4 ${isSticky ? "fixed top-0 shadow-lg bg-white" : "relative"}`,
      style: {
        transform: isSticky ? "translateY(0)" : "translateY(-10%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          react.Navbar,
          {
            variant: "gradient",
            className: "mx-auto w-[80%] p-0 shadow-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between lg:gap-x-6 gap-x-2 text-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: logo,
                    alt: "brand logo",
                    className: "w-24 sm:w-36 md:w-40 object-contain"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-grow hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchBar, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  react.IconButton,
                  {
                    variant: "text",
                    className: "bg-gray-100 rounded-full border-none",
                    onClick: toggleSearch,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaSearch, { className: "h-5 w-5 text-primary-500" })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(react.Badge, { content: totalWishListItems, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/profile/wish-list", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    react.IconButton,
                    {
                      variant: "text",
                      className: "bg-gray-100 rounded-full border-none",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaRegHeart, { className: "h-5 w-5 text-primary-500" })
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      onMouseEnter: handleMouseEnter,
                      onMouseLeave: handleMouseLeave,
                      children: userInfo && (userInfo == null ? void 0 : userInfo.user) ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileMenu, { user: userInfo.user }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(react.Menu, { open: openMenu, handler: setOpenMenu, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(react.MenuHandler, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          react.IconButton,
                          {
                            variant: "text",
                            className: "bg-gray-100 rounded-full border-none",
                            onClick: toggleMenu,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaUser, { className: "h-5 w-5 text-primary-500" })
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(react.MenuList, { className: "overflow-visible md:grid shadow-md", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/customer/auth/sign-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(react.MenuItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FaSignInAlt, { className: "inline mr-2" }),
                            "Login"
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/customer/auth/sign-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(react.MenuItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FaUserPlus, { className: "inline mr-2" }),
                            "SignUp"
                          ] }) })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CartIcon, {})
                ] })
              ] }),
              isSearchOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center justify-between bg-primary-100 absolute top-full left-0 right-0 shadow-md p-2 transition-transform duration-300 ease-in-out rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-grow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchBar, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "p-2 bg-primary-500 text-white rounded-md",
                    onClick: () => setIsSearchOpen(false),
                    children: "Search"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed z-50 top-[calc(2rem)] left-2 block md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobileSidebar, {}) })
      ]
    }
  );
};
const brandsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: ({ brand }) => ({
        url: `${BRANDS_URL}`,
        params: { brand }
      })
    }),
    getBrandDetails: builder.query({
      query: (id) => ({
        url: `${BRANDS_URL}/${id}`
      }),
      keepUnusedDataFor: 5
    }),
    getBrandBySlug: builder.query({
      query: (slug) => ({
        url: `${BRANDS_URL}/slug/${slug}`
      }),
      keepUnusedDataFor: 5
    }),
    createBrand: builder.mutation({
      query: () => ({
        url: `${BRANDS_URL}`,
        method: "POST"
      }),
      invalidatesTags: ["Brand"]
    }),
    updateBrand: builder.mutation({
      query: (data) => ({
        url: `${BRANDS_URL}/${data.brandId}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["Brand"]
    }),
    deleteBrand: builder.mutation({
      query: (brandId) => ({
        url: `${BRANDS_URL}/${brandId}`,
        method: "DELETE"
      }),
      providesTags: ["Brand"]
    })
  })
});
const {
  useGetBrandsQuery,
  useGetBrandDetailsQuery,
  useCreateBrandMutation,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
  useGetBrandBySlugQuery
} = brandsApiSlice;
const Loader = () => {
  return (
    // <div className="flex-center">
    // 	<Spinner color="green" className="h-12 w-12" />
    // </div>
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-screen p-5 bg-transparent min-w-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2 animate-pulse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-primary-400 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-primary-400 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-primary-400  rounded-full" })
    ] }) })
  );
};
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const timeAgo = (date) => {
  const now = /* @__PURE__ */ new Date();
  const past = new Date(date);
  const seconds = Math.floor((now - past) / 1e3);
  const intervals = [
    { label: "year", seconds: 31536e3 },
    { label: "month", seconds: 2592e3 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 }
  ];
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return count === 1 ? `1 ${interval.label} ago` : `${count} ${interval.label}s ago`;
    }
  }
  return "just now";
};
const BrandDropDownItem = () => {
  const { data: brands, isLoading } = useGetBrandsQuery({});
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : brands && brands.doc ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: brands.doc.map((brand) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "li",
        {
          className: " py-2 border-b outline-none hover:text-primary-400 cursor-pointer",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `/products/brand/${brand.slug}`,
              className: "flex justify-between items-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: capitalizeFirstLetter(brand.name) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500", children: [
                  "(",
                  brand.totalProducts || 0,
                  ")"
                ] })
              ]
            }
          )
        },
        brand._id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/brands",
        className: "text-primary-500 hover:text-primary-400 outline-none",
        children: "View more"
      }
    ) })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No brands found!" });
};
const NavList = () => {
  const [openMenu, setOpenMenu] = Z.useState(false);
  const [openMenu2, setOpenMenu2] = Z.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-base lg:gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      react.Typography,
      {
        as: "li",
        variant: "paragraph",
        color: "blue-gray",
        className: "p-1 font-medium text-base",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "navbar-item", children: "Home" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(react.Menu, { open: openMenu, handler: setOpenMenu, allowHover: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(react.MenuHandler, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        react.Typography,
        {
          as: "li",
          variant: "paragraph",
          color: "blue-gray",
          className: "p-1 font-medium text-base",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "navbar-item", children: "Brands" })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(react.MenuList, { className: "hidden w-[250px] overflow-visible md:block shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandDropDownItem, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      react.Typography,
      {
        as: "li",
        variant: "paragraph",
        color: "blue-gray",
        className: "p-1 font-medium text-base",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "navbar-item", children: "Products" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      react.Typography,
      {
        as: "li",
        variant: "paragraph",
        color: "blue-gray",
        className: "p-1 font-medium text-base",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products?discount", className: "navbar-item", children: "Discounted Products" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      react.Typography,
      {
        as: "li",
        variant: "paragraph",
        color: "blue-gray",
        className: "p-1 font-medium text-base",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/vendors", className: "navbar-item", children: "Vendors" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(react.Menu, { open: openMenu2, handler: setOpenMenu2, allowHover: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(react.MenuHandler, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        react.Typography,
        {
          as: "li",
          variant: "paragraph",
          color: "blue-gray",
          className: "p-1 font-medium cursor-pointer",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "navbar-item", children: "Vandor Zone" })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(react.MenuList, { className: "hidden overflow-visible md:grid shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          react.Typography,
          {
            as: "li",
            variant: "paragraph",
            color: "blue-gray",
            className: "p-1 font-medium border-0 outline-none",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/vendor/auth/registration",
                className: "flex items-center text-black border-b hover:text-primary-400 transition-colors",
                children: "Become a vendor"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          react.Typography,
          {
            as: "li",
            variant: "paragraph",
            color: "blue-gray",
            className: "p-1 font-medium border-0 outline-none",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/auth/vendor/login",
                className: "flex items-center text-black border-b hover:text-primary-400 transition-colors",
                children: "Vendor login"
              }
            )
          }
        )
      ] })
    ] })
  ] });
};
const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: ({ category }) => ({
        url: `${CATEGORIES_URL}`,
        params: { category }
      })
    }),
    getCategoryDetails: builder.query({
      query: (id) => ({
        url: `${CATEGORIES_URL}/${id}`
      }),
      keepUnusedDataFor: 5
    }),
    getCategoryBySlug: builder.query({
      query: (slug) => ({
        url: `${CATEGORIES_URL}/slug/${slug}`
      }),
      keepUnusedDataFor: 5
    }),
    createCategory: builder.mutation({
      query: () => ({
        url: `${CATEGORIES_URL}`,
        method: "POST"
      }),
      invalidatesTags: ["Category"]
    }),
    updateCategory: builder.mutation({
      query: (data) => ({
        url: `${CATEGORIES_URL}/${data.categoryId}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["Category"]
    }),
    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `${CATEGORIES_URL}/${categoryId}`,
        method: "DELETE"
      }),
      providesTags: ["Category"]
    })
  })
});
const {
  useGetCategoriesQuery,
  useGetCategoryDetailsQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryBySlugQuery
} = categoriesApiSlice;
const CategoryDropDown = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery({});
  const [hoveredCategory, setHoveredCategory] = reactExports.useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = reactExports.useState(null);
  const handleMouseEnterCategory = (categoryId) => {
    setHoveredCategory(categoryId);
  };
  const handleMouseEnterSubCategory = (subCategoryId) => {
    setHoveredSubCategory(subCategoryId);
  };
  const handleMouseLeave = () => {
    setHoveredCategory(null);
    setHoveredSubCategory(null);
  };
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20", children: categories && categories.doc ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[250px] p-3 mx-auto shadow-md bg-white", children: [
    categories.doc.slice(0, 7).map((category, index) => {
      var _a;
      const hasSubCategories = ((_a = category.subCategories) == null ? void 0 : _a.length) > 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative group border-b-2 border-gray-100",
          onMouseEnter: () => handleMouseEnterCategory(category._id),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: `/products/category/${category.slug}`,
                className: `flex items-center group gap-4 px-2 py-[1.4vh]
                                    cursor-pointer w-full hover:bg-gray-100`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: `${keys.BUCKET_URL}${category.logo}` || keys.DEFAULT_IMG,
                      alt: "Logo",
                      className: "w-[1.7vw] h-[1vw]"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700 group-hover:text-primary-600 flex justify-between w-full text-sm  items-center", children: [
                    capitalizeFirstLetter(category.name),
                    hasSubCategories && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-sm", children: [
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SlArrowRight, { size: 9 })
                    ] })
                  ] })
                ]
              }
            ),
            hoveredCategory === category._id && hasSubCategories && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-0 left-full w-56 bg-white shadow-md z-20 ml-1 p-1",
                onMouseEnter: () => handleMouseEnterCategory(category._id),
                onMouseLeave: handleMouseLeave,
                children: category.subCategories.map((subCategory, subIndex) => {
                  var _a2;
                  const hasSubSubCategories = ((_a2 = subCategory.subSubCategories) == null ? void 0 : _a2.length) > 0;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "group relative",
                      onMouseEnter: () => handleMouseEnterSubCategory(subCategory._id),
                      onMouseLeave: () => setHoveredSubCategory(null),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Link,
                          {
                            to: `/products?subcategory=${subCategory._id}`,
                            className: "flex justify-between p-2 hover:bg-gray-100",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-5 text-sm", children: capitalizeFirstLetter(subCategory.name) }),
                              hasSubSubCategories && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto", children: "▶" })
                            ]
                          }
                        ),
                        hoveredSubCategory === subCategory._id && hasSubSubCategories && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-full w-56 bg-white shadow-md ml-1 z-20 p-2 text-sm", children: subCategory.subSubCategories.map(
                          (subSubCategory, subSubIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Link,
                            {
                              to: `/products?subsubcategory=${subSubCategory._id}`,
                              className: "block p-2 hover:bg-gray-100",
                              children: capitalizeFirstLetter(
                                subSubCategory.name
                              )
                            },
                            subSubIndex
                          )
                        ) })
                      ]
                    },
                    subIndex
                  );
                })
              }
            )
          ]
        },
        index
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: `/categories`,
        className: "group text-center cursor-pointer w-full flex justify-center mt-2",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-500  hover:text-primary-600 ", children: "View More" })
      }
    )
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No categories found!" }) });
};
const BottomNavbar = () => {
  const [openMenu3, setOpenMenu3] = reactExports.useState(false);
  const [openNav, setOpenNav] = reactExports.useState(false);
  const [navControl, setNavControl] = reactExports.useState(false);
  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);
  reactExports.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const handleCategoryMouseOver = () => {
    setOpenMenu3(true);
  };
  const handleCategoryClick = () => {
    setOpenMenu3(!openMenu3);
  };
  const handleCategoryMouseLeave = () => {
    if (navControl === false) {
      setOpenMenu3(!openMenu3);
    }
  };
  const handleCategory2MouseLeave = () => {
    setNavControl(!navControl);
    setOpenMenu3(!openMenu3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full pl-10 py-3 border-none shadow-none bg-primary-400 hidden md:block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 mx-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-[250px] bg-white items-center relative cursor-pointer",
          onMouseOver: handleCategoryMouseOver,
          onClick: handleCategoryClick,
          onMouseLeave: handleCategoryMouseLeave,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              react.Typography,
              {
                as: "li",
                variant: "small",
                color: "blue-gray",
                className: "p-2 font-medium",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: `flex items-center hover:text-primary-500 text-primary-400 transition-all duration-300 ease-in justify-between cursor-pointer`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BiSolidCategory, { className: "w-6 h-6 mr-2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "Categories" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MdArrowDropDown, { className: "w-6 h-6 ml-2" })
                    ]
                  }
                )
              }
            ),
            openMenu3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "Box absolute top-[105%]",
                onMouseLeave: handleCategory2MouseLeave,
                onMouseOver: () => setNavControl(true),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryDropDown, {})
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavList, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        react.IconButton,
        {
          variant: "text",
          className: "ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden",
          ripple: false,
          onClick: () => setOpenNav(!openNav),
          children: openNav ? /* @__PURE__ */ jsxRuntimeExports.jsx(FaTimes, { className: "h-6 w-6", strokeWidth: 2 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FaBars, { className: "h-6 w-6", strokeWidth: 2 })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(react.Collapse, { open: openNav, children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavList, {}) })
  ] });
};
const Header = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavbarSticky, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNavbar, {})
  ] });
};
const StickyIcons = () => {
  const [showScroll, setShowScroll] = reactExports.useState(false);
  const contact = "+923495580124";
  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  reactExports.useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop, showScroll]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-4 right-4 flex flex-col items-end space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: `https://wa.me/${contact}`,
        className: "bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Contact Us on WhatsApp",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaWhatsapp, { size: 24 })
      }
    ),
    showScroll && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: scrollTop,
        className: `bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 ${showScroll ? "animate-arrow-in" : "animate-arrow-out"}`,
        "aria-label": "Go to Top",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleUp, { size: 24 })
      }
    )
  ] });
};
const aboutCompany = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAYAAADVPrJMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaGSURBVHgB7ZpLbxtVFMfPnYcftZOYtupDIupEbcRDSLgLWICg7hcoZY9ECxsqgUiFWBc+AazZGCGVBQuKhERXyK2E+kCCBIQQVR92VShNncR2XvY8L+fM2K3reJzx9czQKP0rN7YyM3fmd++553EzANtQDEbQF5/9fMJxpCMcnIunPnr5S9giEob+5uwfJxhnxcVqEzjnYNlw9IOPX7oAAiqWea6lWPlTk+oFiEESCIoB05jEQFG9LiTJKQxxOczWeO5y1Sx8dc8qGUm7vGqy0vTXzqxW5DmIWArEKAJtWVaeKcrbOvDjTJFzss3xCHePo9nlE0mO4M2jlZPpCkSkyKH7gXYgu5VEg9mTALhvgJZIJktRgkcCHRS0V4cy5GJ45ODCa7pXqWx6gtbolRovImgZQUsIcAIPDbVGCXx/0v3aAdcgZI0809l9WcjsH4edh3bNIOhMkBntp5T0MJBM7UAHidNxp8kjmXGhkEUzqjdaZ5IT6QJTxI1FxbvX0JGlGYN1A+Ds7KOPc6flgtPXiqHroYEHhiZQSVHe4AIm2y0CTeA4pfCTJrduA7SwLSLgt79tfJwowDc178s1rjHguD5B44Km2wtKwnwGDGx38de8xd2ZBpA3XDuZAmiYAMuWt8bxT1Mwoja1zQ4wDCkF4TLIsAuHNYdth+QBE+gKzuwStoaFMPhpbzKWFMra0qbP8jyMqIEzXapRdsQ1CCiCSkvezKpdlkqghgOg46cjZiwPxB1r5IxtIHQqwNqNAzRsCYUsWhOUQSWl0UFpFe+WGUhowr9CPBKCpvWabfscEVAaNNexYTuEpmLh9Ss6xCYhaJN7Tgh/hEBpvDpe3ETg+9jhouu9RyrvA0sImjiNALAEKnet+e5w1STrwHYLTWQVR46+x6XQC44OKM1owgfU/J8dW2jQ6mMO2q2RoAnU9eIhgHYXHFFL2HtPyKOD0qDtwSeYxI50g8EliEdC0F6p/xAUM8nAXnxDHo4VFnnw+uPuyGg2l6zg5w/K2uaxs7umf8ERhSLbIwuantaszQuOsBUqdJjpaZQaGXqrgHZrYJxobyCU+x1L+4CSU2oNAVrBUaGlMI5tH+tf3pOzbLUd3fQEzOUSUO89ZwF9AuXweNu5g1l2GgZIaKYTPQXHsKCdrI02GToFB3n06Uygy/P9bpNTAaq6e6Rwc8VuHByTP/HrQNh70+6HIQDam7XR9VXcLqKw90xGPEGRuy+VpAODzhUuOFoB4+pm6en1lldwZOKJVq4iCVlhpad/44AYPoPbQNNYsLyOjuQkd1CDKtSCI6w8vKM1G3yhlzG4z7c7rSH8XjU4daQFxzDpKW34xyUhaFp+tK07KqjULjj2IvBOZSP0U6r/TKsyeXzvmuyQFZrYxiDzAjx573V7eNDu9FRuFxxNe+O5ewYuVHHLEA5ZC8MUHNjS8uCCgzx8fssXHBAsPX1ScPToNv7jrumzpqs4WAtoIZTJvTLGcP3H5L1Jg0CHTU97RQmQ6QPtoPdcc6jhvSAGR0ZKRwQah0YuOGg9ttrJR9g7nuS9DZ/RyzjMDWmkWEIWwa1iiLF4tFu7HlT4YUu44GjGuJEXtkJ7u2graYN9nK++X2jYv3xo8LW8yiZhKvm9BhHqpv6wtHxz16PJya11Dv+YXmgiFSb8Q9M6Opdlk/zLdahbP1Ya1lWsxG7gElypc87nbMP89OTUXxU694F5n//3PU1RlSL17f7ZvY8NItIxht7ADZ25KlZK+CBvPQ+wQ2AhEauCba3tzPxCUwNPpDS2Zp13G0pTpTHYLR1G33MbNzxu5+VkolAsP3uUwN1HOVeeyakJs4ShTwNB3V0GuDrvfcomg/s4gzfWvWOvPQ3w3E6IRKuWB2zxxQ7wI8rKBzApqmMUaGgIXiqW84dd6Oy4fYZzpsGQKtdwY2+JQaXmze6lGodx7PGFMQhFFLJUCU1f7V9N0fyvtmuARfOcbz9jCL7o/E5fNVm1jyul2kzOsq0ZGFLX0HRLN6OtgSlkeWu4/326s7Umv+7bT4J1vTrDpCOSZVlCryjF+bpEEDm8GfhciTOmwTaTYv75DvTusdtLdUAXD1IqBfAqxCJdN+DilWsgrncHHrXvHfO+sG2anDyB3i6SMK7XYRuJc6ehHHv98Hc//DR7GjclX+wckDrbna76x0jG+3XIoBM6HXp/uH2OPiCblTD54Daei5uCUW19r62suxgEzEz+OWxH/Qe6wVA+zdNYEwAAAABJRU5ErkJggg==";
const contactUs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAYAAADVPrJMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaPSURBVHgB7ZrPbxNHFMffzHodO6HtIn5LPSx/AYl6aOCCc+shbYlUUKWWxpYa2rSHwF+Q5C8gOQVBpTiUG60SVI6V4l4gVQ81fwF7C4SUuBDHP3Z3Xt+YBNbe3WR343Uo8kdC2LPr3fnum5n9vjcB6NLlnYVBB9Gyj7Wy2qcraGs7bSmrWizlT5egg8QqWoqsJQ5lgYvzDHkGGGqeJyIrIWCRAyzYpl2o5k8ZECOxiE59+yzDGE4yBhmIAD2AJRRitvrTqQLEQFtFy8jWe/quU6+z0A4Y5EXNnm535NsmWkaXM1j0HcLRMRjCdPnW8Ty0ibaI7r3ybJIG5dSeJyKUkEGJ7mo0bo4gH1A/BIJNbd08Ng1tYN+i9xSMUiTOCiEKfnNUHVvrT6DIAOcT1CHd91ptEr4v0emxfyYYs2c8DzaiKqYrN0/OQAhSY6tZxpRJP/EI4lrYa7YSWXQqu6rzpPLY6xgiFHr6yiOlmWjv39T3dG3Bp6h7o17HhbCH9rOyRxadvrL22CsaDMVs+dbJq9AGeq88naIrTnocMpL18kBUU8MhAqmxtWzcgiVbN09M0WI363FIryd7I98nUqS9o4wGdfI0xED6u7VlEp9paS5RtE9HiXboSPtFWXAxBDGBzM55NGu1ZDoLEQgtmnFwLy7knKo34vPL8tqewxz55xCBUKK17IbmMcxA2PYCxE4939oivb20vhCSUKKriaqHe0IjrsTASfnWh0Vyc4XWdlPtuwAhCSWac55xNTJWgA7BBTxyt4qANtZxHQiH3tqAKB5Bh7ABiq1tYlfb6k040Yx/4GqymQGdAm3D3eju016EEk3JvWvREEx0tNTTDhJBT7x4u5It10F3uhnLQroCTvz70aqxMu5+ZeHDT3Rg6jzsPQSX2OBv13Y7YXBuVdfU90eVljjVTdGvUd/ufpPOQ0ACObJLd+rXKcqets8WCE/K5ZJJScBfPx5vmnO4MrxMt8hAEASOsHP3l7wOScEck38f7+vVVMVvcLL83a+TOQiAb6S/+LmSebpZ1bW0esZPsANN5cpiZn5joJA73PbhziG5TOHR2K4hwuxnt7dKG+XaoxOHUsYvl9MFvzNdoi/Ob/aDqi7SRx3JiTAWeNrr1U1Lvj4Kb/qRyAGz6FpsdwOBuOAf5WcZCLpCI1y1aT2nXsPFOzUDmDly96tDrhW/SfSX8xXdVnlDsBy2ghJjHiIn4Rx153d2dsmg/wZgHzCkBxawC4ntADX6zZgOqC5fmK8MLOXShvO8pjCSYJm76k037eh2gBt8VUeLiqaqiisfbxm7TId3Dsy0tjTPaSZoSLQ3tPhwOEMDTg90Mucl9rH33G4ngd/TUcA/hyfpIU4BKAF/IF9zn87s9c7eL5HKRYFBCJ0BEVF+E4p4RQOLkGfjPYiZWIc3DdMZfDBM70sRcAXmBjt7vwAx0yQaacs07DJmy4m4C36mIwqIEAWXQ2we3ihCDy3LFtApKpYF4WEuR9Yk2rJScrvEgIBI5/OiVodOUTbNxj0DQ1tLpmm79r6aRC/lWEkxG6VcQ6F9V7JyvpG0yKaub1XAxjfHhWh/QYGr4nWkpOA1uqcl/Pr0qp2/spEGWOZQqwWV+E5hmWU9r1R1gUJXeGKSOfyoTRev2XbrT4wH40diKfafvfGciv3NzqpHUUDhzbOzapmzDHkxdJa1g/NH5+bWafVlE37nNoYR8hGICcu2rsnUFRx5QeOhOx48Uqb28IejgbZ6Ai/Wg3PrtIUKo5T16M1H8J4AZWZl/LABMTI4t6EztKcYZ2fAkYRQrm+QiIUH40fz0KVLEwecLUdHLrSMKaO0p/RHmKKg5H8pervC8/qvIDbM+tDvufcKQX8fc8IRD3byzSai9AtbWxUdQhBrwhGGC/OoJdRKlvJvjSpcxV8v9/h7duTndz6+rNdDm6K3Yng35idQQZI562GsaJrqkHSJznMv3bFGEey8/PySLPALEp1M8cNhSs8HLnp7ftKmgFeZt7EjajgadFnzknZUCt4kL07kyQkGKvLvcODD+0ml2n8kkda5R9mVdk0ypsP7S7EmWeAqZVvbiYchgE9DSA5cdA0snTw+aKkeSDi8dM2y4Xm1ultWJQUPRXGCBy6aiq9F6aPXSXgjiaCI1+m7R0Kzg0ExX0imEjNRt5DeioWMsqhFyqI8CoJ2ToBd2PmWSqVK7dgre2vMCWVyVMBg8q+FdEoiCvRvemX8WAG6dOnSpYub/wDx9sNkweFh3QAAAABJRU5ErkJggg==";
const faq = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAYAAADVPrJMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAciSURBVHgB7ZpdbBRVFMf/d7rb7VIoKwhUwLDEYMKH2goIkgjFCAI+AEaNMRpKTIzyYknEoC/sqjFRMOqDPJBoy4MkGhPaB6GAkfXFF6NdUKQKlq22opS029LP/ZjruXc/p7tt7053Z4vpL2lm59670/nPOffcc88sMM00/1sYpjC8rs6F0Aw3NO4GYy60zqU75kHo9BcZ8DOfJwgTTDnRUqg+81Vw1NDd1Rg6W12jh/tJgg+h0MfM90YAikwZ0bzuoBtRW32G0HQyRaddAD6Ew3tVxBddtLQsn3UInNdNOHg80QkYa8BIyDue+KKKltbltpNkpSqlL6iIlrAAufzmsYRrKBIxwfbzyoJzu7obpfYWvuX9rNcuiuiUYLq5wuEC085nE265e8fncEsugrmzDCP3uNHbPhMVgS44u3qRA0GEwtXprm6D1cSClltlaHSOC93PPkmCl8rzi/2x9gU/XMWK4z5V8S7Y7fV03JxosNTS0q112zWVsUJw1ysvIjInFbwSogXOrj6s936pbnXG97MzBz4SH62d02IdVqR366MGwaMZmleBC/sehzKcHeI1H8oLWiZaWnm8xCMNnebw4Nrq5LmtJ4h5Rz/DOmnZvmR794q7pXhFXHBEasUH6yzN7YdUh4YXVhrOK858C8cf1zD3179oLp839PW550MZne0UByvdu0Z1oP3vf4znnalz+8CIoc82MAxlyNOEi08qentauAvlEG7r6ghG0HFzGFGdBcOh8oBvN0vugGIBTH2J0oaGMbf+BAbXVJOFA/QQrst2YdUL+7YZxs5Ic3cl7OFdOYv2XOE1dNhJmdQuEutOtDOdbpbZoJXQdZ3D2NE8TDsg7td55Di+fs+Vq085f7ks/xKIaP7jczsNc3ix75JhjquhVSmL9l7hhzhDHYmNhdQJFzsuMqEqehC1x1ZuwUuXz2EyiOVrqDQlWIhd9tX3yBkNsycULS3LUM85WZXDFOWRHOZdFkQ2Jpev+DotsrL1b31B83kk94vpcI/rdMK6dBCbAjeKyNCq5Ybz1UcazQmOM6alPb/zejJsLaYAkTlzkp9juXeu89hIVksLweTStcgTN5yq++Ds2Lq7k58rAjcwSS5kWFoGrDxbuK0ihwQiCxVnRULCsKivwlzwSkfjAYNoEbRIsAd55l+y9IDdgfKwuXko1m1X0ym4WifnMRKd+4zuTVEaBWDAXoa2WZWYDP0bH0bHppWIlDtgHhZg5173J0XTPK4tZJRudK+FWfo3bkBw5w5cpGzsylMbYBrGfeKQsrQG5Q2BGX6eu0S6uBmG40UEQe+SeTANC3vFQYqWCUiB12Lh4o3uh2CG2bTLEttL2+AIlp7+CaZgaGDNsZKRLd6wx2y2lQsnlm3Elo6LmD+UU41Lbjgq3/kAlaYDGZWEWcibOIu5NytEGTY7b69+GpbDo96ElQUx0bp1otsqFuDY8i2wDu6liN2Q3lJCUbuKLP3yRF+tLAOWzaRIGgFCembfQidwvV/HSNTYd+cMhlXzbbgV4sm+3+5YJI/3d/+JnLhZltt4IfjsAc/oVk0UACb66kya+U/QMvsgjdy9ECjVMvvWzNfwzH0OOGypPecsB8Ou5aVYu9iW0Sfm9+fLHkHhyC5YoLS1vyvtAQvBDs14nsBREhOaPCeRCaGiT1g9HSH84LrnKTefjbyj01vMMdAoak/4Yrt9MPYnuEQbnFuRVF93KNXX2hXFzYGU74vPbT16sq+zT8+4tli/D65/YVLJS1ZKtD1jdTHPZapd2aBUgB+Pzu4IOnsimAyVgz3BT32fNNGU20R1anfGgFyXLK5Xi7RzdLP0N89V3pMsA5kkH6IpVfCd3uaUr1/4vjerUMKoasNExeYBOSAhWrF+Hntlq9F7rP0Gb7bF/5t4GjUoMozr3yU/H31X3JM/2zi+9bCHRiikzeTF9uhJpL3HEsgwRE+4CVMAHbpPZVwsKnOvylhZ695xZEl6kxRNldsG6jT1S518QQ8+0Lx9lk91vBSuhWknwo/T2Tj3TtvJU6+1p7dI9/YsZUFKUppkDl4kqNqqZrk04qllrfz+Y4drsg6K9GdMkVTlJEoVE1txRAsr08GHScC+OeBTHZsqIiynSKfn/rTzgbBy83ZnABZhzMhKIV5a+2EhYpkiwQ2wEINoMbcRwW66kwAsQLg1WXkvLCYj95ZuTvuKQkfzuODNVrp1guzF/nuZH2FUF8rixRQsGHOXJS2uFWB+M944NFRWXSzBgrHfZYmNiHgHnSfksqRr+0/vcDSiyIz9qtZOJeE8FAtFdCZXPm51hB6PrKLjhf9aqCECXoD81iWeEWPcz6No50z3Dw+XN6b/DGOqkPF7AunWdrQobjXFElcdj/i3DVqWFo+SYBHZb0PBgkzRbMIcWLirFwO3p2BB1p/LjPmaxw4fZW0BTDPNNFOV/wC8MKfPjY3HYQAAAABJRU5ErkJggg==";
const contacts = [
  { name: "About Company", img: aboutCompany, link: "/about-us" },
  { name: "Contact Us", img: contactUs, link: "/contact-us" },
  { name: "FAQ", img: faq, link: "/faqs" }
];
const Contacts = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-around items-center flex-wrap bg-blue-gray-50 p-4 w-full gap-4", children: contacts == null ? void 0 : contacts.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: item.link, className: "flex-center flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: item.img,
        alt: item.name,
        className: "w-18 h-18 object-contain"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-800 text-center", children: item.name })
  ] }) }, index)) });
};
const AppStore = "" + new URL("apple_app-0d7cmlUK.png", import.meta.url).href;
const GoogleApp = "" + new URL("google_app-DiMF-I1S.png", import.meta.url).href;
const FooterItems = ({ title, links, content }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg mb-4 text-center pl-4 border-white", children: title }),
    links ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: links.map((link, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: link.url,
        className: "pl-4 flex items-center justify-center hover:text-primary-100",
        children: link.name
      }
    ) }, index)) }) : content
  ] });
};
const footerSpecial = [
  {
    title: "SPECIAL",
    links: [
      { name: "Flash Deal", url: "/flash-deals" },
      { name: "Featured Products", url: "/featured-products" },
      { name: "Latest Products", url: "/latest-products" },
      { name: "Best Selling Products", url: "/best-selling-products" },
      { name: "Top Rated Products", url: "/top-rated-products" }
    ]
  }
];
const footerInfo = [
  {
    title: "ACCOUNT & SHIPPING INFO",
    links: [
      { name: "Profile Info", url: "/profile/profile-info" },
      { name: "Wish List", url: "/profile/wish-list" },
      { name: "Track Order", url: "/profile/track-order" },
      { name: "Refund Policy", url: "/refund-policy" },
      { name: "Return Policy", url: "/return-policy" },
      { name: "Cancellation Policy", url: "/cancellation-policy" }
    ]
  }
];
const footerNews = [
  {
    title: "NEWSLETTER",
    content: (handleSubmit, email, setEmail) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center w-full gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-left", children: "Subscribe to our new channel to get the latest updates" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex justify-center w-full", children: [
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative ", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              placeholder: "Your Email Address",
              className: "pl-2 py-2 rounded text-black min-w-72 focus:outline-none focus:ring-2 focus:ring-primary-700 placeholder:text-xs placeholder:text-gray-400",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "absolute right-0 top-0 bottom-0   bg-primary-600 p-2 m-1 rounded-r text-white font-bold hover:bg-primary-700 text-xs",
              children: "Subscribe"
            }
          )
        ] })
      ] })
    ] })
  }
];
const FooterMainSection = () => {
  const [email, setEmail] = reactExports.useState("");
  const [customerSubscribe] = useCustomerSubscribeMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await customerSubscribe({ email }).unwrap();
      setEmail("");
      _t.success("Subscription successful! Thank you for subscribing.");
    } catch (error) {
      console.error("Subscription failed:", error);
      _t.error("Subscription failed. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-[80%] w-full bg-primary-10 mx-auto flex lg:flex-row flex-col items-center min-h-[50vh] gap-4 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-[25%] flex flex-col gap-4 px-4 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: logo,
          alt: "Company Logo",
          className: "w-48 h-30 object-contain"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg mb-2", children: "DOWNLOAD OUR APP" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: GoogleApp,
            alt: "Google Play",
            className: "w-36"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: AppStore,
            alt: "App Store",
            className: "w-36"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:w-[75%] w-[90%] justify-around", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex lg:flex-row flex-col-reverse w-full gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-[30%]", children: footerSpecial.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          FooterItems,
          {
            title: section.title,
            links: section.links
          },
          index
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-[40%]", children: footerInfo.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          FooterItems,
          {
            title: section.title,
            links: section.links
          },
          index
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-[30%]", children: footerNews.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          FooterItems,
          {
            title: section.title,
            content: section.content(
              handleSubmit,
              email,
              setEmail
            )
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex lg:flex-row flex-col w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-[70%]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex lg:flex-row flex-col w-full mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "lg:w-[40%] w-full text-lg font-bold", children: "Start a Conversation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-white lg:w-[55%] lg:my-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-around", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FaEnvelope, { className: "mr-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "contact@example.com" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FaPhone, { className: "mr-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+123 456 7890" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FaTicketAlt, { className: "mr-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Support Ticket" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-[30%] mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex lg:flex-row flex-col w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-[40%] text-lg font-bold", children: "Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-white lg:w-[60%] lg:my-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FaMapMarkerAlt, { className: "mr-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1234 Random St, City, Country" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
};
const socialIcons = [
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTwitter, { className: "w-4 h-4 text-white hover:text-blue-400" }), url: "#" },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaLinkedin, { className: "w-4 h-4 text-white hover:text-blue-700" }), url: "#" },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaGoogle, { className: "w-4 h-4 text-white hover:text-red-500" }), url: "#" },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaPinterestP, { className: "w-4 h-4 text-white hover:text-red-600" }), url: "#" },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaInstagram, { className: "w-4 h-4 text-white hover:text-pink-500" }), url: "#" },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaFacebookF, { className: "w-4 h-4 text-white hover:text-blue-600" }), url: "#" }
];
const FooterSocial = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex lg:flex-row flex-col items-center lg:items-start lg:justify-around  p-2 bg-primary-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm text-white", children: "Copyright LightHouse@2021" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-4 my-4 md:my-0", children: socialIcons.map((social, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary-600 rounded-full hover:bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: social.url, className: "block p-2", children: social.icon }) }, index)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "", children: "Terms & Conditions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "", children: "Privacy Policy" })
    ] })
  ] });
};
const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterMainSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterSocial, {})
  ] });
};
const validateSession = async (token, setModalOpen) => {
  try {
    const { data } = await axios.post(
      `${keys.BASE_URL}/api/v1/validate-session`,
      {
        token
      }
    );
    if (data.status === "expired") {
      setModalOpen(true);
    } else {
      console.log("Session valid");
    }
  } catch (error) {
    console.error("Session validation failed:", error);
    setModalOpen(true);
  }
};
const SessionExpiredModal = ({ onClose }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 flex items-center justify-center z-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black opacity-50 transition-opacity duration-300",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 z-10 transform transition-all duration-300 scale-95 opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold mb-4 text-gray-800", children: "Session Expired" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-gray-700 text-lg", children: "Your session has expired. Please log in again to continue." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "bg-primary-500 text-white px-5 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200 transform active:scale-95",
          onClick: onClose,
          children: "Go to Login"
        }
      )
    ] }) })
  ] });
};
const apiHealthSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkHealth: builder.query({
      query: () => "/"
    })
  })
});
const { useCheckHealthQuery } = apiHealthSlice;
const RootLayout = () => {
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLoading: checkApiHealthLoading } = useCheckHealthQuery();
  const [customerLogout] = useCustomerLogoutMutation();
  reactExports.useEffect(() => {
    if (error) {
      _t.error("Server is not responding!");
      navigate("/server-error");
    }
  }, [error, navigate]);
  reactExports.useEffect(() => {
    const checkSession = async () => {
      const token = userInfo == null ? void 0 : userInfo.accessToken;
      if (token) {
        await validateSession(token, setIsModalOpen);
      }
      setIsLoading(false);
    };
    checkSession();
  }, [userInfo, userInfo == null ? void 0 : userInfo.accessToken]);
  const logoutUser = async () => {
    const userInfo2 = localStorage.getItem("userInfo");
    const user = JSON.parse(userInfo2);
    dispatch(logout());
    await customerLogout(user == null ? void 0 : user.accessToken);
    window.location.reload();
  };
  const closeModal = () => {
    setIsModalOpen(false);
    logoutUser();
    navigate("/customer/auth/sign-in");
  };
  return isLoading || checkApiHealthLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : !error && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Vista Mart - Best Online Shopping Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Shop at Vista Mart for a wide range of products with the best deals!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "keywords",
          content: "shopping, ecommerce, online store, best deals"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "author", content: "Vista Mart" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://vistamart.biz/" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#f3f5f9]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-[90%] w-full mx-auto md:px-8 px-4 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        reactExports.Suspense,
        {
          fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) }),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StickyIcons, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contacts, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(SessionExpiredModal, { onClose: closeModal })
    ] })
  ] });
};
const AuthLayout = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 p-4 flex justify-between items-center flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "vistamart", className: "w-40 h-40 object-contain" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 lg:w-2/5 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
  ] }) });
};
const schema$4 = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long").regex(/[a-z]/, "Password must contain at least one lowercase letter").regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[0-9]/, "Password must contain at least one number").regex(
    /[^a-zA-Z0-9]/,
    "Password must contain at least one special character"
  ),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  referCode: z.string().optional()
});
const SignUpForm = () => {
  const [customerRegister, { isLoading }] = useCustomerRegisterMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: t(schema$4)
  });
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = reactExports.useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (userInfo && userInfo.user) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  const onSubmit = async (data) => {
    var _a;
    if (data.password !== data.confirmPassword) {
      _t.error("Passwords do not match");
      return;
    }
    data.confirmPassword = void 0;
    try {
      const res = await customerRegister(data).unwrap();
      _t.success(res.message || "OTP send successfully to your email");
      navigate(`/auth/email/verification?email=${data.email}`);
    } catch (err) {
      _t.error(((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || err.error);
      console.log(err);
    }
  };
  const handlePhoneChange = (value) => {
    setValue("phoneNumber", value);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "w-3/4 mx-auto p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Sign Up" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 md:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "First Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...register("firstName"),
            className: `input ${errors.firstName ? "border-red-500" : ""}`,
            placeholder: "Ex. Jhon"
          }
        ),
        errors.firstName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.firstName.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Last Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...register("lastName"),
            className: `input ${errors.lastName ? "border-red-500" : ""}`,
            placeholder: "Ex. Doe"
          }
        ),
        errors.lastName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.lastName.message })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 md:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...register("email"),
            type: "email",
            className: `input ${errors.email ? "border-red-500" : ""}`,
            placeholder: "Enter email address"
          }
        ),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.email.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Phone Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhoneInput,
          {
            country: "pk",
            onChange: handlePhoneChange,
            inputClass: "input",
            inputStyle: {
              appearance: "none",
              border: "1px solid #e2e8f0",
              // border-gray-300
              borderRadius: "0.375rem",
              // rounded
              width: "92%",
              // w-full
              padding: "0.75rem 1.5rem",
              // py-2 px-3
              marginLeft: "2rem",
              color: "#4a5568",
              // text-gray-700
              lineHeight: "1.25",
              // leading-tight
              outline: "none",
              boxShadow: "0 0 0 1px #c6f6d5",
              // focus:outline-1 outline-green-100
              transition: "box-shadow 0.2s ease-in-out"
            },
            placeholder: "Enter phone number"
          }
        ),
        errors.phoneNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.phoneNumber.message })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 md:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...register("password"),
            type: showPassword ? "text" : "password",
            className: `input ${errors.password ? "border-red-500" : ""}`,
            placeholder: "Minimum 8 characters long"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleTogglePassword,
            className: "absolute inset-y-0 right-0 flex items-center pr-4 text-lg",
            children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(FaRegEyeSlash, { className: "mt-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FaRegEye, { className: "mt-6" })
          }
        ),
        errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.password.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Confirm Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...register("confirmPassword"),
            type: showConfirmPassword ? "text" : "password",
            className: `input ${errors.confirmPassword ? "border-red-500" : ""}`,
            placeholder: "Minimum 8 characters long"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleToggleConfirmPassword,
            className: "absolute inset-y-0 right-0 flex items-center pr-4 text-lg leading-5",
            children: showConfirmPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(FaRegEyeSlash, { className: "mt-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FaRegEye, { className: "mt-6" })
          }
        ),
        errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.password.message })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Refer Code (Optional)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ...register("referCode"),
          className: `input ${errors.referCode ? "border-red-500" : ""}`,
          placeholder: "Use referral code"
        }
      ),
      errors.referCode && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.referCode.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-gray-700 text-sm mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            ...register("terms", {
              required: "You must agree to the terms and conditions"
            })
          }
        ),
        " ",
        "I agree to the",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-blue-500", children: "Terms and Conditions" })
      ] }),
      errors.terms && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.terms.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn primary-btn w-full", children: isLoading ? "Loading..." : "Sign Up" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center mt-4", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/customer/auth/sign-in",
          className: "text-blue-500 underline hover:no-underline",
          children: "Sign in"
        }
      )
    ] })
  ] });
};
const schema$3 = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")
});
const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: t(schema$3)
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  reactExports.useEffect(() => {
    if (userInfo && userInfo.user) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  const [CustomerLogin, { isLoading }] = useCustomerLoginMutation();
  const onSubmit = async (data) => {
    var _a;
    const { email, password } = data;
    try {
      const res = await CustomerLogin({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      _t.success("Login successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
      _t.error(((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || err.data);
    }
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-1/2 lg:w-1/2 mx-auto p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4 text-center", children: "Sign In" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "input-label", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "email",
            type: "email",
            ...register("email", { required: true }),
            className: "input",
            placeholder: "Enter email"
          }
        ),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.email.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ...register("password"),
              type: showPassword ? "text" : "password",
              className: `input ${errors.password ? "border-red-500" : ""}`,
              placeholder: "Minimum 8 characters long"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",
              onClick: handleTogglePassword,
              children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(FaEyeSlash, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(FaEye, {})
            }
          ),
          errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.password.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right mb-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/forgot-password",
            className: "text-green-600 hover:underline cursor-pointer",
            children: "Forgot Password?"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full btn primary-btn bg-primary-400", children: isLoading ? "Loading..." : "Login" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center mt-4", children: [
      "Enjoy New experience",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/customer/auth/sign-up",
          className: "text-primary-400 underline hover:no-underline ml-2",
          children: "Sign up"
        }
      )
    ] }) })
  ] });
};
const vendorsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    vendorLogin: builder.mutation({
      query: (data) => ({
        url: `${VENDORS_URL}/login`,
        method: "POST",
        body: data
      })
    }),
    vendorRegister: builder.mutation({
      query: (data) => ({
        url: `${VENDORS_URL}/signup`,
        method: "POST",
        body: data
      })
    }),
    vendorLogout: builder.mutation({
      query: (token) => ({
        url: `${VENDORS_URL}/logout`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }),
    getVendors: builder.query({
      query: () => ({
        url: `${VENDORS_URL}`
      }),
      providesTags: ["Vendor"],
      keepUnusedDataFor: 5
    }),
    deleteVendor: builder.mutation({
      query: (vendorId) => ({
        url: `${VENDORS_URL}/${vendorId}`,
        method: "DELETE"
      })
    }),
    getVendorDetails: builder.query({
      query: (id) => ({
        url: `${VENDORS_URL}/${id}`
      }),
      keepUnusedDataFor: 5
    }),
    getVendorBySlug: builder.query({
      query: (slug) => ({
        url: `${VENDORS_URL}/slug/${slug}`
      }),
      keepUnusedDataFor: 5
    }),
    updateVendor: builder.mutation({
      query: (data) => ({
        url: `${VENDORS_URL}/${data.vendorId}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["Vendor"]
    })
  })
});
const {
  useVendorLoginMutation,
  useVendorLogoutMutation,
  useVendorRegisterMutation,
  useGetVendorsQuery,
  useDeleteVendorMutation,
  useUpdateVendorMutation,
  useGetVendorDetailsQuery,
  useGetVendorBySlugQuery
} = vendorsApiSlice;
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")
});
const VendorLoginForm = () => {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [vendorLogin, { isLoading }] = useVendorLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: t(loginSchema)
  });
  reactExports.useEffect(() => {
    var _a;
    if (userInfo && ((_a = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _a.role) === "vendor") {
      navigate("/");
    }
  }, [navigate, userInfo]);
  const onSubmit = async (data) => {
    var _a, _b;
    const { email, password } = data;
    try {
      const res = await vendorLogin({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      _t.success("Vendor login successfully");
      navigate("/");
    } catch (err) {
      console.error((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message);
      _t.error(((_b = err == null ? void 0 : err.data) == null ? void 0 : _b.message) || err.error);
    }
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-out", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-blue-gray-800 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Sign in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4", children: "Welcome back to vendor login" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "input-label", children: "Your Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "email",
            type: "text",
            ...register("email"),
            className: `input ${errors.email ? "border-red-500" : ""}`,
            placeholder: "email@address.com"
          }
        ),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.email.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ...register("password"),
              type: showPassword ? "text" : "password",
              className: `input ${errors.password ? "border-red-500" : ""}`,
              placeholder: "Minimum 8 characters long"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",
              onClick: handleTogglePassword,
              children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(FaEyeSlash, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(FaEye, {})
            }
          ),
          errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm", children: errors.password.message })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full btn primary-btn", children: isLoading ? "Loading..." : "Login" }) })
    ] })
  ] });
};
const CustomLeftArrow = ({ onClick }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: "carousel-arrow left-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleLeft, { className: "text-white text-lg" }) });
};
const CustomRightArrow = ({ onClick }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: "carousel-arrow right-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleRight, { className: "text-white text-lg" }) });
};
const ProductCarousel = ({
  data,
  component: Component,
  largeDesktopLimit,
  desktopLimit
}) => {
  const [showArrows, setShowArrows] = reactExports.useState(false);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4e3, min: 1024 },
      items: largeDesktopLimit
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: desktopLimit
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "relative",
      onMouseEnter: () => setShowArrows(true),
      onMouseLeave: () => setShowArrows(false),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Carousel,
        {
          responsive,
          infinite: true,
          autoPlay: true,
          autoPlaySpeed: 2e3,
          customLeftArrow: showArrows ? /* @__PURE__ */ jsxRuntimeExports.jsx(CustomLeftArrow, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
          customRightArrow: showArrows ? /* @__PURE__ */ jsxRuntimeExports.jsx(CustomRightArrow, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
          arrows: showArrows,
          renderDotsOutside: true,
          className: "relative",
          children: data == null ? void 0 : data.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { data: item }) }, index))
        }
      )
    }
  );
};
ProductCarousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  component: PropTypes.elementType.isRequired,
  largeDesktopLimit: PropTypes.number.isRequired,
  desktopLimit: PropTypes.number.isRequired
};
const Quantity = ({ product, qty, setQty }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    if (location.pathname === "/cart") {
      dispatch(addToCart({ ...product, qty }));
    }
  }, [dispatch, qty]);
  const increaseQty = () => {
    setQty(qty + 1);
  };
  const decreaseQty = () => {
    if (window.location.pathname === "/cart") {
      if (qty > product.minimumOrderQty) {
        setQty(qty - 1);
      } else {
        _t.error(
          `Min. order for this item is ${product.minimumOrderQty} piece.`
        );
      }
    } else if (qty > 1) {
      setQty(qty - 1);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: decreaseQty,
        className: "p-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaMinus, { className: "text-sm" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "number",
        value: qty,
        readOnly: true,
        className: "py-1 px-2 w-12 text-center bg-blue-50 rounded mx-2 focus:outline-none"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: increaseQty,
        className: "p-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaPlus, { className: "text-sm" })
      }
    )
  ] });
};
const WishListIcon = ({ productId, onClose }) => {
  var _a;
  const { userInfo } = useSelector((state) => state.auth);
  const { refetch } = useGetWishListByIdQuery((_a = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _a._id);
  const navigate = useNavigate();
  const [addWishList, { isLoading, error, isSuccess }] = useAddWishListMutation();
  reactExports.useEffect(() => {
    if (!isLoading && isSuccess) {
      onClose && onClose();
      _t.success("Product added to wishlist");
    }
  }, [isLoading, isSuccess, onClose]);
  const addToWishListHandler = async () => {
    var _a2, _b;
    if (!userInfo || !(userInfo == null ? void 0 : userInfo.user)) {
      _t.error("You need to Sign in to view this feature.");
      return navigate("/customer/auth/sign-in");
    }
    try {
      const customerId = (_a2 = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _a2._id;
      await addWishList({ customerId, productId });
      refetch();
    } catch (err) {
      _t.error((_b = error == null ? void 0 : error.data) == null ? void 0 : _b.message);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: addToWishListHandler,
      className: "btn border border-pink-300 text-pink-500 py-3 rounded flex items-center justify-center",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaHeart, {})
    }
  ) });
};
const ProductQuickView = ({ productId, onClose }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { data: product, isLoading } = useGetProductDetailsQuery(productId, {
    skip: !productId
  });
  const [mainImage, setMainImage] = reactExports.useState("");
  const [qty, setQty] = reactExports.useState(1);
  const [minimumOrderError, setMinimumOrderError] = reactExports.useState(false);
  const productImages = (product == null ? void 0 : product.doc) ? [mainImage, ...product.doc.images] : [];
  const oldPrice = ((_a = product == null ? void 0 : product.doc) == null ? void 0 : _a.price) + ((_b = product == null ? void 0 : product.doc) == null ? void 0 : _b.discountAmount) || 0;
  reactExports.useEffect(() => {
    var _a2, _b2;
    if (product && ((_a2 = product == null ? void 0 : product.doc) == null ? void 0 : _a2.thumbnail)) {
      setMainImage((_b2 = product == null ? void 0 : product.doc) == null ? void 0 : _b2.thumbnail);
    }
  }, [product]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const isProductAddToCart = cartItems == null ? void 0 : cartItems.find(
    (item) => {
      var _a2;
      return item._id === ((_a2 = product == null ? void 0 : product.doc) == null ? void 0 : _a2._id);
    }
  );
  const addToCartHandler = () => {
    if (qty >= product.doc.minimumOrderQty) {
      dispatch(addToCart({ ...product.doc, qty }));
      onClose();
      _t.success("Item added successfully");
    } else setMinimumOrderError(true);
  };
  if (minimumOrderError) {
    setTimeout(() => {
      setMinimumOrderError(false);
    }, 3e3);
  }
  const buyNowHandler = () => {
    if (qty >= product.doc.minimumOrderQty) {
      dispatch(addToCart({ ...product, qty }));
      onClose();
      navigate("/checkout-details");
    } else setMinimumOrderError(true);
  };
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) }) : product && (product == null ? void 0 : product.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col border shadow bg-white rounded w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-4 border-b", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: `/products/${product.doc.slug}`,
          className: "text-lg md:text-xl font-semibold hover:text-primary-500 text-primary-600",
          children: product.doc.name
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-gray-500 text-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaXmark, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-start gap-4 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:w-1/2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-48 md:h-64 lg:h-80 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: mainImage ? `${mainImage}` : keys.DEFAULT_IMG,
            alt: product.doc.name,
            loading: "lazy",
            className: "w-full h-full object-contain"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-4", children: productImages == null ? void 0 : productImages.map((src, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: `${src}` || keys.DEFAULT_IMG,
            alt: `Thumbnail ${index + 1}`,
            loading: "lazy",
            className: "w-16 h-16 object-cover mr-2 border rounded cursor-pointer",
            onClick: () => setMainImage(src)
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:w-1/2 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl md:text-2xl", children: product.doc.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-gray-600 ", children: ((_c = product == null ? void 0 : product.doc) == null ? void 0 : _c.rating) || 0 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Rating,
            {
              name: "half-rating-read",
              defaultValue: 0,
              value: (_d = product == null ? void 0 : product.doc) == null ? void 0 : _d.rating,
              precision: 0.5,
              readOnly: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-2 border-l-2 px-2 items-center mx-2 text-xs md:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "border-r-2 pr-2", children: [
              ((_e = product == null ? void 0 : product.doc) == null ? void 0 : _e.numOfReviews) || 0,
              " Reviews"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "px-2", children: [
              ((_f = product == null ? void 0 : product.doc) == null ? void 0 : _f.totalOrders) || 0,
              " Orders"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-primary-400", children: [
            "Rs.",
            formatPrice((_g = product == null ? void 0 : product.doc) == null ? void 0 : _g.price)
          ] }),
          oldPrice > product.doc.price && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold line-through text-gray-500", children: [
            "Rs.",
            formatPrice(oldPrice)
          ] })
        ] }),
        product.doc.stock > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Quantity:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Quantity,
              {
                qty,
                setQty,
                product: product.doc
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
              product.doc.stock,
              " left"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
            "(Minimum Order Qty:",
            " ",
            product.doc.minimumOrderQty,
            ")"
          ] }),
          minimumOrderError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "bg-red-100 text-red-400 w-full rounded-lg p-2", children: `Minimum order for this item is ${product.doc.minimumOrderQty} piece.` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "", children: "Total Price:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary-400 ", children: [
            "Rs.",
            formatPrice(((_h = product == null ? void 0 : product.doc) == null ? void 0 : _h.price) * qty)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "(Tax included)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: buyNowHandler,
              className: "btn bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 w-full lg:w-1/2",
              children: "Buy now"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: addToCartHandler,
              className: "btn primary-btn w-full lg:w-1/2",
              children: isProductAddToCart ? "Update Cart" : "Add to cart"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            WishListIcon,
            {
              productId: product.doc._id,
              onClose
            }
          )
        ] })
      ] })
    ] })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Product details not found!" });
};
const ProductDialog = ({ productId, open, onClose }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(react.Dialog, { className: "z-40", open, handler: onClose, size: "xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductQuickView, { productId, onClose }) });
};
const ProductCard = ({ data: product }) => {
  const oldPrice = (product == null ? void 0 : product.price) + (product == null ? void 0 : product.discountAmount) || 0;
  const [selectedProduct, setSelectedProduct] = reactExports.useState(null);
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  const handleProductClick = (product2) => {
    setSelectedProduct(product2);
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };
  return product && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white overflow-hidden shadow-sm  w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative  overflow-hidden group cursor-pointer z-10", children: [
      (product == null ? void 0 : product.discountAmount) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "discount-badge", children: [
        "- Rs.",
        formatPrice(product == null ? void 0 : product.discountAmount)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: (product == null ? void 0 : product.thumbnail) ? `${product.thumbnail}` : keys.DEFAULT_IMG,
          alt: product.name,
          loading: "lazy",
          className: "product__img object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "product__quick-view z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => handleProductClick(product),
          className: "bg-white p-2 rounded-full shadow-sm cursor-pointer hover:text-primary-400",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaEye, { className: "text-xl" })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col p-4 group gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/products/${product.slug}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium truncate mb-2 group-hover:text-primary-400 transition-all ease-in", children: product.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-yellow-600 gap-1 ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaStar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500", children: [
          "(",
          (product == null ? void 0 : product.numReviews) || "0",
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        oldPrice > product.price && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm line-through text-gray-500", children: [
          "Rs.",
          formatPrice(oldPrice)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-primary-400", children: [
          "Rs.",
          formatPrice(product == null ? void 0 : product.price)
        ] })
      ] })
    ] }) }),
    selectedProduct && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductDialog,
      {
        productId: product._id,
        open: isDialogOpen,
        onClose: handleCloseDialog
      }
    )
  ] });
};
ProductCard.propTypes = {
  data: propTypesExports.PropTypes.object.isRequired
};
const FeatureProducts = () => {
  var _a;
  const { data: products, isLoading } = useGetProductsQuery({
    isFeatured: true
  });
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : products && (products == null ? void 0 : products.doc) && ((_a = products == null ? void 0 : products.doc) == null ? void 0 : _a.length) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow-md shadow-gray-200 rounded-lg py-8 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4 text-center text-primary-500", children: "Featured Products" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products?featured", className: "view-box", children: [
      "View All",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleRight, { className: "text-lg" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCarousel,
      {
        data: products == null ? void 0 : products.doc,
        component: ProductCard,
        largeDesktopLimit: 5,
        desktopLimit: 4
      }
    )
  ] }) : null;
};
const CategoryItem = ({ category }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: `/products/category/${category.slug}`,
      className: "flex-center  flex-col gap-2 p-2 group cursor-pointer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: `${keys.BUCKET_URL}${category.logo}` || keys.DEFAULT_IMG,
            alt: category.name,
            className: "w-28 h-28 object-contain rounded-full transition-transform duration-300 group-hover:scale-90"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base w-28 font-semibold truncate transition-colors duration-300 ease-out text-gray-800 group-hover:text-orange-500", children: category.name })
      ]
    }
  );
};
const CategoryList = ({ categories }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4e3, min: 1024 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Carousel,
    {
      responsive,
      infinite: true,
      autoPlay: true,
      autoPlaySpeed: 2e3,
      renderDotsOutside: true,
      className: "relative",
      containerClass: "carousel-container",
      arrows: false,
      children: categories && categories.length ? categories.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryItem, { category: item }) }, index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Categories not found!" })
    }
  ) });
};
const Categories = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery({});
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : categories && (categories == null ? void 0 : categories.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow-md shadow-gray-100 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900", children: "All Categories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/categories", className: "view-box", children: [
        "View All",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleRight, { className: "text-lg " }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryList, { categories: categories == null ? void 0 : categories.doc })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Categories not found!" });
};
const FlatCard = (product) => {
  var _a;
  const oldPrice = (product == null ? void 0 : product.price) + (product == null ? void 0 : product.discount) || 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-72 bg-white border border-primary-100 rounded-lg overflow-hidden flex justify-between items-start mx-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg overflow-hidden group cursor-pointer z-10", children: [
      product.discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "discount-badge", children: [
        "-$",
        (_a = product.discount) == null ? void 0 : _a.toFixed(2)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/products/${product._id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: `${keys.API_URL}/uploads/thumbnails/${product.thumbnail}` || keys.DEFAULT_IMG,
          alt: product.name,
          loading: "lazy",
          className: "product__img h-32"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 w-44", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/products/${product._id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium truncate mb-2 group:hover:text-primary-400", children: product.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        oldPrice > product.price && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm line-through text-gray-500", children: [
          "Rs.",
          oldPrice.toFixed(2)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold", children: [
          "Rs.",
          product.price.toFixed(2)
        ] })
      ] })
    ] })
  ] });
};
const FeaturedDeal = () => {
  const { data: products, isLoading } = useGetFeaturedDealsQuery();
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : products ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary-100 shadow-md p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-900", children: "Featured Deal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/featured-deals", className: "view-box", children: [
          "View All",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleRight, { className: "text-lg" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium text-gray-800", children: "See the latest deals and exciting new offers!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCarousel,
      {
        data: products,
        component: FlatCard,
        largeDesktopLimit: 4,
        desktopLimit: 3
      }
    )
  ] }) : null;
};
const LatestProducts = () => {
  var _a;
  const { data: products, isLoading } = useGetLatestProductsQuery({});
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : products && (products == null ? void 0 : products.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "Latest Products" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2", children: (_a = products == null ? void 0 : products.doc) == null ? void 0 : _a.map((product, index) => {
      if (index <= 7)
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { data: product }, index);
    }) })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Latest products not found!" });
};
function DealOfTheDay({ image, title, price }) {
  const oldPrice = 185;
  const [discountAmount, setDiscountAmount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (oldPrice > price) {
      setDiscountAmount(oldPrice - price);
    }
  }, [oldPrice, price]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-primary-50 border min-w-64 min-h-48 border-primary-400 shadow-sm rounded-lg ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "uppercase text-base font-bold text-center text-primary-500 py-4", children: "Deal of the day" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-56 bg-white py-4 rounded-lg overflow-hidden shadow-sm text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg overflow-hidden group cursor-pointer", children: [
        discountAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2 bg-blue-800 text-white text-xs font-bold px-2 py-1 rounded z-10", children: [
          "-$",
          discountAmount.toFixed(2)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image,
            alt: "product-image",
            className: "w-full h-56 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium truncate mb-2", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          oldPrice > price && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm line-through text-gray-500", children: [
            "$",
            oldPrice.toFixed(2)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold", children: [
            "$",
            price.toFixed(2)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn primary-btn", children: "Buy Now" }) })
    ] })
  ] });
}
const CategoryCarousel = ({ category, component }) => {
  var _a;
  const { data: products, isLoading: isProductsLoading } = useGetProductsQuery(
    {
      category: category._id
    },
    { skip: !category._id }
  );
  return isProductsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : products && (products == null ? void 0 : products.doc) && ((_a = products == null ? void 0 : products.doc) == null ? void 0 : _a.length) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "products-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mx-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center w-fit gap-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: capitalizeFirstLetter(category.name) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: `/products?category=${category._id}`,
          className: "view-box",
          children: [
            "View All",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleRight, { className: "text-lg" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCarousel,
      {
        data: products == null ? void 0 : products.doc,
        component,
        largeDesktopLimit: 5,
        desktopLimit: 4
      }
    )
  ] }) : null;
};
const ProductsCategory = () => {
  var _a;
  const { data: categories, isLoading: isCategoriesLoading } = useGetCategoriesQuery({});
  return isCategoriesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : categories && (categories == null ? void 0 : categories.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (categories == null ? void 0 : categories.doc) && ((_a = categories == null ? void 0 : categories.doc) == null ? void 0 : _a.map((category) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CategoryCarousel,
      {
        category,
        component: ProductCard
      },
      category._id
    );
  })) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No Categories found!" });
};
const FlashDealTimer = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +/* @__PURE__ */ new Date();
    let timeLeft2 = {};
    if (difference > 0) {
      timeLeft2 = {
        Days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
        Hours: Math.floor(difference / (1e3 * 60 * 60) % 24),
        Minutes: Math.floor(difference / 1e3 / 60 % 60),
        Seconds: Math.floor(difference / 1e3 % 60)
      };
    }
    return timeLeft2;
  };
  const [timeLeft, setTimeLeft] = reactExports.useState(calculateTimeLeft());
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1e3);
    return () => clearTimeout(timer);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center space-x-2 bg-primary-500 p-6 rounded-lg", children: Object.keys(timeLeft).map((interval) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary-400 text-white p-4 rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text", children: timeLeft[interval] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white", children: interval })
  ] }, interval)) });
};
const FlashDeal = () => {
  var _a, _b;
  const { data, isLoading } = useGetFlashDealsQuery({});
  const deal = (_a = data == null ? void 0 : data.docs) == null ? void 0 : _a.find(
    (item) => item.publish === true && item.status === "active"
  );
  const endDate = (deal == null ? void 0 : deal.endDate) || new Date((/* @__PURE__ */ new Date()).getTime() + 30 * 24 * 60 * 60 * 1e3);
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : deal && (deal == null ? void 0 : deal.productId) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 w-full mx-auto bg-primary-100 flex lg:flex-row flex-col justify-between gap-8 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "lg:text-2xl md:text-xl text-lg font-bold text-primary-400", children: "FLASH DEAL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-400", children: "Hurry Up! The offer is limited. Grab while it lasts" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlashDealTimer, { endDate }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/flash-deals", className: "view-box", children: [
        "View All",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleRight, { className: "text-lg" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4", children: (_b = deal == null ? void 0 : deal.productId) == null ? void 0 : _b.map((product, index) => {
        if (index <= 3) return /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { ...product }, index);
      }) })
    ] })
  ] }) : null;
};
const delivery = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAYAAADVPrJMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYTSURBVHgB7ZlfbBRFHMe/u/evvfZ6Ky3QQrhuSYRKQUpjfIHAodDwJ0h9MxihjY9AbF8MiQYK+uAb9cXwoCnlgWCCsYohDWnkMEYtQWj4p4YCl5JCEQpH27tr9+52ndnr7f3ZvbtdvWtrsp9kb+fmz858Z34z89tZwMTExMTExMTExMTEpEgwWpHStRYODvEISW7B3OCHyHQwq3sHUQS0Rd/afZ/ceMwtAQjMOmZdrx8FxpoZQUa5kfzymHu4h6jax3eHe7JnKQn425gADGLViOEwT/jm2RuddoejM3sOCStOi/4YxI67e6y90IkiWuqWxTZi5PpauGtylypxAnYnDBOLANHITM02wGJDAeAtYLv5bsmnd9STI83gGn0ARu9BvvLx6lbAoVP4+FPg4V/AxNP0eFp+yUqgypOzeNOCqGb8ozArXwTO4RBbyb0LOkiKltBDhNfC6eJRynnzltQr+PFdYPimdtp0CLhP+vr5KLB8nebIt78Sxju105rFJ6MMtvS75bAIZjeMimba0Env0o03vWAlLwqBEFIJFkuXIepeA/vo+WRk4BEwQjrRs1r1CJdVQjbKSRq1gqvPrHQb8hIT5/SYuHohG/q1EWUG17KKKtK6KnX8vauqqGDTF4hWroe1vxFsaDiZQC2iahngdMMImxZHZNEUvSaeJposZjxePD5OLhhi7EF8jqdCR3liDIagZm5Q9M6lAo7/USqH9Zp4mmhi4n7pnOco3JVHYAStlTz0AoYJGd5y/5WJq82bb/KROW1MtBaJrSkDRoi3J7ziQ5QNHkhPjGmv0vkwauJq0df79qGkHIbgyL5evTzjydp7sPPWR5ggC5ng2aMWbVE3Z2ZLysnLrpgS1mPimXOaQ2SqhVwwBHU6MkVrLWwEuni5fnlLMw0vqZ2iL4dKlFHMxp0JixLWY+KZczogDXjbYLN9CyNoeVY0zlWpuZilrdqpZOmofKIzsTsk4qGFO/xtpX6tdLXtOLmA7HgYubKYMuqa9LuaS+r1Ozz5aSE++0U64lqJSd/7JC6Smxe/6/DbaeMavPkF0Xz168nefznufWWDCl66EgWGt9lj9DzgZGZCpt34iRCOjFxu78TIiwLdd1euj/vdT4lZC+H4GkCfwVXH53EWsy4WSTe0FZvpXbqxk7qhF1FI5Gngyfti8V+psAThYoPK/1I2jDsa+YytEPOYg4vP4ED11+mRkqh5NKQS/dtkPRjWgvnASGSRrnx0hFWCc6AS/d7QJ2At80O0XlyWoKH8+d2d/wEjwiJcnlytO7/uOc0KQZSM3oR18m+I9jJEyxdhqlp/RYWEtsU5PCCHaVuEBXU49OAgtrgH0hYyejICnFOV1yW64vY5cINn5MpSocJHt30q32cDWj9tB21PJuOrdqHn9ffT4iSykAHvqp+DPJQP/YgFl79SCabQUa/u+1gzrRjQdmgJptB4mq4HZUVvb2/nQiHhA8HuanxW2aB82Zi88ZMsjrJqVT02bdqAUCiE8+cv4MmTmYM+/jWU1PAoJtGJAKI3+5X/27c3g+c9uH37T1y69LMSb1uzBZbyuG9VMT7sKws9GmSY2OcnTpzwJ/Io5h0OR44zDNPqiEyiZnRgJm4aUzOCaQWHDx9SHl5b68GxY5/JYfvD66hhDJ62GGRs7DnGZ8J79+7Bjh3NcpgOwsKFVTh7Nu4+u0auwO12JYp56SVJFjqIdYnIVPP2ZlYUS3mp37hxQ1oaHXVaGUUURRQbUUweEDY01COzLQkEQdAqzu/fv7828SdVtB85UExZI45lZ3fnCwbTX17odEvAZnGsbDabcn6ltJb0ZAcyhDudpUqYzpsrV64qlfT0nFbS7PaCfKnISWodp06dVjqc3nO1RZLIGYGEjq6uLuVQgclXWXPzbnKgIOX8ZEtGuq6vr/BfF1Pxels4u12Mf4XJjv/Che/rkIe8dikI5Dwlt+kfLbZgis/XS0aMfRv0E642AdL5m6GDvCOdYOvWXa2kj/YxTPwzriQxPkmK9fT3/+DDLLJtWwtPFs5OElxLLro30U74ThDYLtoxMDExMTExMTExMTExmUv+AbaJDuYSzGbqAAAAAElFTkSuQmCC";
const authenticProduct = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlkSURBVHgB7Zt7TBzXFYd/sw/AwC4YbPOwsQHbrG1o7NTBrdK6hiSq4ybEjtQ0yIpjQpQ/kiZu06pNpKQJrhy1lqI6bmsrldMap3UjS1UDtqWqUhugadQkuA20RYBfLO837IPdhX3M5N7Bu56ZnZmdZWdRpOST0DJ37izzcc7ce2bnLvA5g8FyU9ddBYNpD8AVg/WfRGNFB5aR5RGOSLJ1ZKtYstdOTqOJyJ9bDvnkCatLKmFPtry+wkuTVMKeDPnEheu6i4nkYa2SuavSkJ+fgVmXAY4ZN7xz89CAfVE+RK75rXYkwNKEw5IMVwWO/MQgLLl+vRVms4Fvu97P8q8BfxAeIq1ZnkEH+ZvnwHJNS5HXLqyDpJCwsJDlkFcX1llSiJywkGTJKws/ebVFb8kwawyDsA8EMRLaoKl/3PJgGsF6nkfjnQ7pHpNs//ruOjXZpUhS1phH8VzhMZRn/AdcygCGHGl4aupvMcXNKSZk52TyP9rkuToYVnSSX96Q7pEX5lAljf1SJcNQ2Z8Wf5d/pRiseViHcZzBfZqkw2iXZ7bLHW+CBvZUFSErKwXxEBbzhDJRknYNz649FmkLE5Z+y1SDNx0voGX+IVgMTjLDhTT9A4Ty8z4/bvYOxzxGk7DZrH0w32Vpw3NrX0OGwa2pP5UusgKvFZ4gWyf4NtY7g6HpFLzuOE7+Cfs1vY/RqC3r4s9NFWgEXyx6UbOsEob0HBTl+vGLnEdgM3dCT3QVfjD3AvSCIdJgjKhZ8Tb0RFdhLZHlQiG4gxb+JxaM0UiuaQf0RNM1rBUPKy/B+XwYHkvF+ZFDuOg+CDeXzbcXpo6i0nIFzxSeIb+PRB8X9MPNZkNPdL+GpXBT42ju+DIe7f0LzrueichSRhYK0DxVg293ncd7s1VRxzKmFN0jrJswld1l+Yeojcp+fLMErzjeEolKcYcs+N7119Hu2ilqZzJyUZ12CYXGfuiFLsLhokII5/eDnRzHq0RWjTSzA1npi0Iv2xtE+wyZq8n8n4ozq+7TTTphYWkFFWHOhRbnXtUCIi/rvziydxu+uvHX/DZNcWmU+eLE6uGlLUzi6Z2wMJ2KZK9d1yx6g7erO1vBJey948eRbSp7ePf9cHiL0NbzUqS93b0z6r2oNI3wwcxfIVESHqUVp6KQuDykqfsVEsnekRr4AlkR2bff/yvmA+KBLAqDkR/ACo12JErCwhOBAvkdZjLCMs7IZufAIWzf8Ad8844fITt9QFaWQqeqKEhtrdcUlXBKX56plZdekUFG2GZRU1v3y8gnqawkS6m0/DuqjfVMYSS4AX/0HEGiJCxM74ZesZ+KkjbkrMJd6R+IRtf+qd248OEFRdnCFFKIWMXCrHscQzPkvnla+y2kGrpMS1SWSntDgkqLlIWGvLU4mv2kqG/vaI2sLOWXm38o2qayrGtcN1mKboUHlf7IvVvUxqzOQ+X6G7y02pRiMbpxrKQBtvSronbOM4sW30O6yVKSXksb8gvxcE4nKof34c3hZ3HF+/WIABXdv+oyDuW9I19Lh/y6ylJ0FVacolJSsa4EJIqnSQV2AnOkzGRmQ7CY1O+uklFLL8vdkhCGyFvgIzILMfvyt5Kf5bulFscD0AvWO0uNdZmKhOgq3De/GT8fPK5cjGiEyjpnvfjBzJ+W6Rpm6MOr2wQCHLTysfsbsI/txG8+eGexYT6VPGIbAnd/K5DtiurPzk2BmyCz2JWnAGcx+WMOeN1BPLj7abjM2j8p9ZOPbCXvLHt7pRRhu3DD5Yx9vQl5tKsLcFgXf6hwz0byLOARMFOZ4lOi8+yoH8bWF8i8ZgMWSF82D1Zy3GNXuxAP8z7pOcrPg/LCrFH0PHZqygetrPF4cI/dHr1jIgOG4w+Q6OXygxHrHEH32EaY3v8J4F0t6spZUvE4EbYG/NBK1AfxbLBVrp+8cGMZFY78h8bGPCSt1R9+hZGVJTBuP/qYDXhs8DKevvZn7LvxL9Q6WtFu2hbVl8s0wxIKaI5yKMTyTyAE2JUeoisPWvRJ3C2o7OCAC7Gg0a1WEp4P4uJdFfzvE+y6yGB0xbJa5qwYEuUUzVF2O73khkoUkFalvmrCTcLN3t7ZmFEun5zkpaMgsghy+H9RftSu3xdsln0vzpqiKco0upNjs+JGlj2n1F9ZuHFrKzimNbxJZam0GrV0sGLJiO4NLL7egvEEiGwBJrKiCxO30Yx2q3qU1aCyAeEIzZBzpueugPo8zIWOCjdv3nBgbNQj2/WenuvIvzkBw/AcfK4QurJzbp+DN4i/V5RBifdWFt4+oWkfRrhUuE3mSJQP2K/JHkdTeWZScqmFQk9ABXVhPsrcSWHTJ59MwCkzTd3b0YuL5Vvw0ne+hYNHHsfP7q2Cx2wGM+fno/3RJuUConl1MVxEkHEs8LL1X6rG3Tv3o768Ck2bynCgL1qYzrvDA5PiRnquMZY+xH4sWNdHKn1/C+m5I9yUnm7C3V8rJK9m1UNpite2tqOltAQn9+0R7ZMueTj7vxbsumbHKdsOnC6/U/V9qWz/9VFxKtOR+Xe2EsQgdmnZWOIAxz4MQTHiJSna1jokG2khl8rKyIcCBny4qRixOF2wDSOpGWgu3qzaz0eeA8vKsmw1NGDU0gkdpxzYfqSNRLmWbKXRJpakab/dRZ4dG7EyJ032sAD51GM2Ix3/3FoatW/GKS5X3aSM7LNkoTN3DZSgT/qH+ycRCoZEzWCZfWjc0gMNxLdOq+7qDhi4dyFZgFa6MRsVFbmIh1ireKSMDU9HD1CLstW3CiVNxL8wjV/KZGiBRFrrdR1GqzBN4VEyONElDRIW0zjOxWlLX4nHGN4VDmRhbFtyYLOtjPkWWoTpHDs5JnMPQOdaOv0kdSWeHPXdDWTce1XarCXaasK0Lh4nKSwT1cWp5+yW72OJ6LC4tPcAGevpapRi6S56bZeWWmXF5YTDZaLMtUqhKfyEWhWlBX2WD/MpjgaS5oelu2i0bbYcFK0Xl5VS4elJJ5++kpuARWhUOV+D3Mq6eNF3vTRdwbeY4sXSXfQ5b+WuvEi0w8I0fWlUFVbV6RJVIclZEa9wbVNopOmgNjjGqKUvgT0Kdv4NPaIqJJlfAaDTF722D0h30TSfX2Dl0zeBEVgLyf+Sh0qaS7CTs3kev7U1IYks39d4VNI8Wekrx/J+b4kfzY1n+QXn/F9Pbvp+dqBpXt+z5OLhC+LgU4MPjO8jEx9EAAAAAElFTkSuQmCC";
const returnPolicy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfpSURBVHgB1VtbbxNHFD6ztkNCQmOLwkMfyqaVUFtUYZK2tFQtDuWpgZL0D9RUqkSfEqvirVLWUt9jvxTeYv5AE24PlVrshF5AlcA0ooVKyEsRSNCKuEBuXnunZ7w2sXdnb/auA5+0ye7OeHY/n8vMnHMM0GFQaSZMpXNTsEEQoIOg0tkYQOgqnk7ABiEIHQCTKhKdhA0kWofvhKl0ZhQVaRpPw/AMgIBPQKmKAF1oq3SU30OJEGmsCB2GL4Rp8vw4UCqBM6nm8TVk7D8HhOaJdDgHPsJTwppUQ0x9Y9A6ZHytHIB6yg/ynhF2KVWnkJF4kkifZMAjeEJY88JBCYcbB38ge0XcY5U+H8W/M3gqgi8gGYASEh+ToUX447SksxIOPQn+QEZpJ1Das9ACfJ6WQlkwlTaTFmVtqBUt2D0hEpkcSYJL+Ea4DjNpE+kQWe/DvpwAEhfYnL0fnJtECsdJgAv4TpiBN101EjbpL4Ez8hkc6yg4REcI10Enz03gE5m0w1aEn/avEg/GHfgDx5LuKGGGuvTwBeMuP2PhD1gnSJDkoRTYoOOE2wH6g5T1XE+H7VZnHd0PtwskM8HWdBY9prVFkDk6Srg8PzRK59+aWslGRWgRSFqyIC2izVvuuTui0srFaCxIA5N03UvLFGg68OEVW5szA4aJMvjvM5MnDpitxnyVMM1Gw3R+cCpAA1navIMSCZApdX6oUJ4fjENLUJgkZX5bl6lX940wvTg4SQOBAgVipWKigHZ3d/bwtHSMeWLn0IIH1GT+pXEzW/ZcpZn6okTZIkO067uqdMPlv97DY1/1HN8mBcpaWjrpfHNg7rlpUrP3Zni3H2aOKBCYpg43/9cKe+D7/Mca0aaBgEU/ktK3Ixkn49QChAUwrseLONdH9P0F/iAsnOoMdTvV1NeerPxgAE5lP4fTv31qJMtAQNz72qXp5R8/KDBtsRuvptppTlOYx8MkalmWwQHoxaFxSkECB7ud4lK4KtGbd1837bNjWwGOvDMD4d5FdikCc3bzQ5nVSiXZM5yXzUcXZtnCldMQwyPXeMOg0mwTT6SRPFigaqcQnELVi4INDHbKQX9vEUbf/g52bC+YjkMIho/KapoM57mRTpym2NIzprudQ7UebrzBkXBFhGokkY+16UFJeIKL+V4KdjC10xo2hVYhtisLe3f+YjsWpURSH0McTwf4HeA0ii+mu2sQiOtA/PJlKgb7cKZ7E13FAN/nMTuduz4Mt/8ZMB1n785fYf+uC9CNpO1A1yhUCmugPq4Kgw+ioFqH9DmrMP3m/A7y9cjt+o0mwprHI7bBcXUJVfUSRpcWKGyKQjH4MqnaMLPTuesH4Jq8x/SzOju1BC1TUO+XoXKvZNuXraxQrdm7N/uTcoW9DJ8wXrKog+NsACO+8jOEQ/coXNn8Lvx062BbdtqIChJVkSgj7QLMFGO6e01fgI6wIOKdLLiEghwu3euDB10PoXfrNggEQ0/b3Ngpg/qoApU7SHRZBfdQbxtnWiI2XukIq2I7q83VR/+BsrIM3Vv6q8RbtFNoHZiysYHn2cOKosDSw39h3+YLcKB/AUIh68WcGzv1Ar5tHuqO7ckZWqRL/D7MTssLKx6SFWTDLdrshAXDBzSv5hmQbBhJI3kKdeLMTpXrSPTvNbdOyQbMJHUgqtx4aVRpKhg/5ADv99+ExXIvHn3cdubYFFxtd72q4KpJgc7BUsLo1kk1G+Aab/TegS9e+gE+iixY9lMfeylRPYTdxnvlplWjTsIlGVcr+6FFRIJLcDDyOwxtuQWLSh90HlS/icnrqwyaJFxvtIv82YERf6XnPmwAYs2XxLAn4HhpOgc0FIfnDPw9fOW0/g5vWprFXccReP4wqrtGba3k9J0MhGuR+6ibqMezAaITEpnlVQmZLDxYyEQwifk+e9BqwfRBQ/UUr68J4XKK1VdpJQzPAwR91DJnlmPiEl4PjFFjESihluEff2Hcq6NQ4mDwzub5J4u1NJMy2jLL6TYgciKfUqmKAXAqQ8dAilSF5CZhhRNC0QfvSMYqg2i5lVlPYCt7eLmaxS+jE0I1CE5EcIjg9hIEXiiDY1DI0QAc7UnckA1NWhlyo0CKZu9ah4Ms/LlaIro6kEGlFo+xTCCRBEIcOTkXhGWU6tGe4zdyvMZaIVxzMs5BUtzB9lCp5W9CM7zWyMm8HDl5NY5qPoD7oRy0DbRTlSS6v7oxYEqWOVOt6q/xcxknFQC2hDX1IGN4GkNpT5v1Y8TDJ64Ot2XflKaZnXYf/9P0xWvFb0zrGpe/Mu4DvK3xwLkuXqt7Ri+tjNlVwy0ew/g1gXHQB9F4Ko12Wg4Iib7EH3nrd2CLITIDBrLKsNPqPFfJtAbSspOH8OxbR9jSTpuezbNZl2QZXGcPmyrcCZGAltJ2hd6MOJLOMm+uEa7gNEPT3cHVFEnIRevnVVWYeeOYrsmRpunRUrpUV0YkO610ReLx4IulaN/WZcmeaLWifpIltzmtaa3AxT1azg9zSoZlrbAb0nbJOOtxq3bKFhMxTrPMsv7tFI63nRA3KRmWNfJsPxqQzb4A7UvrEtE2Y2geu2u/j+AFH2pL3XKq3d9JeFcBUF3TUiZtsw1HsXbUIYI9PCNah+c1HjWJM/tyUxXbCEaM/fADt3elWa9/+eJrnVZte4mHigepRxTFhi5FLT2COSGK/wnJtWP/TvA/0MaUJZBX4roAAAAASUVORK5CYII=";
const safePayment = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWqSURBVHgB7ZtbTBxVGMf/Z2ZvpV2gorSYBna1rchDsxBorLVliTE1hijE2tiEkPBgAiZajL74RPHdlKRGsFQLVm00jW2iL2oaVhIpDZXQxGJC07BI5ZoClgUWdmeO5ywsXWDZmdk7l18yMJdvZ/e35ztzzsw5S7BERfWgnRBaRwAb20xHHHHBix/JIMKCEAeo1IrPS1rUhAv8T+W7g2cEQtuYrB1xlo0YSu1M4xJq2s+pCRferu63sBc1YKNDaC1q2mqVwgQ9EVV9MxsCItQphQhLabxZSMc7bbZQAQI2Wp1VQgztI2CLodMS7EoTMJItItoQSYfcib2IBjnpu8ue/ZZa+DolmGJLT9Np4lx+r8qaf6jSSVzpAv4oNWE0J/qyHLNbQGVXKmIGQYN+DvUNVWRKMaW57K8VKTGTjQsUtR4TrvFVReE7xwwslQk2Afaa72htSOEFE8H9Q3psFlgb/EZI4YnMTXcRt283S1qw0X6ck76CBWPQihOZqBLfg5NkIp5EJHxJPu+TDgf+JTVIX6JM9zHiSUQpnU5nEAlpmEW82XJ1ePuiFUjqvIDcUcO6x428QxJBB8zsJsidMUA/T+EZiU96hxQ2M+GX+1LWPW7Ij0w4den8stuLmb5hxIPtOrzZ2RbWgmPkTUTCrfFXoZUns/+CwdKFcImop9U2fBJ3Jl5ChnEEWnkwux9z3l2q4/XGGTx37Hs8U/QT2h+ylmPMAs+Nj0Cnn4IWIhLmTMzv9S2xhJeqrfQ8UtIe99lJxgD0r30CqfskpHvFqs8VsXAs4aIHWany/8Egu8ahO94IseCqavGkEuZpm7anHxk5d5HBJNcTXU2guDycB7mvGHSSDajMr+1DJEzYZByGNfsL33/qlWEs/HdFyoYDFxcP/O5bOLx+U9dSHV/YCe+tysQJW7MvYG/mz4glxDzuW/wYsu4mrh02GYcQdwyz2x2PTQ8XnsIWQsfGWXoiGTLNSqUwrXp0PTVLMDm3NtbELpFZaYsjO6YEPe7WUSrVEyLaEQZHrRSlefKa/W4P0NwpYOjR4xGL3TuA949LPmlOl4ti0ouockRfgX3CIXR7r+G+dDNojPBNk9UBSusRBnl7go/D8dJ7ftWxgn3ysmwsOGH4EC9wYfEQXjfWwUh2Bo3zXbS+bso5KxApn31EBzTU6d7R4GNObg9B94OV18O/Waw7yiXqh8vm6V5RFRtylKz6MrWLOrSFink6SB0e+i+4HE/r3SmLJb8nuxqmlD+hhI6YYRYPsPTvXt7H75bmpMWPHkz2l4VP0ev9Lfj5ECGB9VQJfiGbnFuMT8tiqa8QbxKy8KL5sk96WrrH6n0NvHR6+bhWWU5St8NP6Ap8shxeykW7Gpe3w5Hl6BSOOhEjvJJZMWbM0445eRg7WElz/NLCo17sJ9plGaFnACzNjXAgBni8ysI8fW+zNObSfrh0rv7EijiVshynYkqzGhdWk6WEy3VQVRyXXS0diAZZPk1xQFH4s9PEQSjKgeimt2tWnTBnPWlNsuBTPeBQfYmtvkIt7Nuxsxeof4CkQMnRwjJomBjH63Ihq8OjI3rccDdqkvUhe/ITOlvl6kBBAwg5A40EtsNqYdHOC4Ud1oQ2S1QWriNOUHnxWpRQ4bestx2IUSsQCC9dUZIdfD3hHQ8qkZi0AivfBK1NRzqdfDXhwkulHLPU9tXdoo6z/u2k6FqKklRFQJ2IAVT2lAduJ4VwubVnSpLEckQZ1n+obz7c1RO4L2luHk5Zu3pkiVYhSnDZwFT2k1R3S6es3S3RkF5PlpN0t4eL0kJ+mHV6ilL6wXqynKS8H+bpvSDJJZQ1J2pfQ0EdokfOv1h0M+RPkpJ+IvQP/TabIPp+amT37wvsWvJmh/eimg93tKg534aZ+X2l32bRCSJ72EiL2x8a02dlcp3KcuvFok6HlvP8D4F2BrXKdd7fAAAAAElFTkSuQmCC";
const services = [
  { name: "Fast Delivery all across the country", img: delivery },
  { name: "100% Authentic Products", img: authenticProduct },
  { name: "7 Days Return Policy", img: returnPolicy },
  { name: "Safe Payment", img: safePayment }
];
const ServicesList = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-around items-center flex-wrap gap-4 my-10 bg-primary-50 shadow-sm p-4", children: services == null ? void 0 : services.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex  justify-center items-center flex-col w-44 gap-2 p-2",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: item.img,
            alt: item.name,
            className: "w-18 h-18 object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-center text-gray-800", children: item.name })
      ]
    },
    index
  )) });
};
const SellerCard = ({ data: seller }) => {
  var _a;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg border border-primary-100 overflow-hidden flex flex-col w-75 mx-2 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/shop-view/${seller == null ? void 0 : seller.slug}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: `${keys.BUCKET_URL}${seller.banner}` || keys.DEFAULT_IMG,
        alt: seller.firstName,
        loading: "lazy",
        className: "w-full h-24 object-cover transform transition duration-300 ease-in-out hover:scale-105"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: `${keys.BUCKET_URL}${seller.logo}` || keys.DEFAULT_IMG,
            alt: seller.shopName,
            className: "w-16 h-16 bg-white rounded-full object-cover -mt-8 border-2 border-white shadow-md transform transition duration-300 ease-in-out hover:scale-105"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col -mt-2 ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800", children: `${seller.shopName}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-400", children: "★" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: " text-gray-600 text-sm", children: "2.2 Rating" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex mt-2 justify-around", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row text-center gap-1 px-3 bg-gray-100 rounded-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-primary-400", children: ((_a = seller == null ? void 0 : seller.reviews) == null ? void 0 : _a.length) || 0 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 text-sm p-1", children: "Reviews" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row text-center gap-1 px-3 bg-gray-100 rounded-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-primary-400", children: seller.totalProducts || 0 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 text-sm p-1", children: "Products" })
        ] })
      ] })
    ] })
  ] }) }) });
};
SellerCard.propTypes = {
  seller: PropTypes.object
};
const TopSeller = () => {
  const { data: sellers, isLoading } = useGetVendorsQuery({});
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : sellers && (sellers == null ? void 0 : sellers.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow-md rounded-lg p-4 mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Top Stores" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/vendors", className: "view-box", children: [
        "View All",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleRight, { className: "text-lg " }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCarousel,
      {
        data: sellers == null ? void 0 : sellers.doc,
        component: SellerCard,
        largeDesktopLimit: 4,
        desktopLimit: 3
      }
    )
  ] }) : null;
};
const Banner1 = "" + new URL("slide-5-j3ulQrqJ.jpg", import.meta.url).href;
const Banner2 = "" + new URL("slide-6-BdBBw6oA.png", import.meta.url).href;
const Banner3 = "" + new URL("slide-7-BD7y3Xk0.jpg", import.meta.url).href;
const aws_btn = "_aws_btn_edau8_1";
const styles = {
  aws_btn
};
const AutoplaySlider = withAutoplay(AwesomeSlider);
const HeroSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  AutoplaySlider,
  {
    play: true,
    cancelOnInteraction: false,
    interval: 6e3,
    className: `${styles.aws_btn} lg:h-[60vh] md:h-[50vh] h-[35vh]`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        buildExports.LazyLoadImage,
        {
          src: Banner3,
          alt: "Banner 3",
          effect: "blur",
          className: "object-contain"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        buildExports.LazyLoadImage,
        {
          src: Banner2,
          alt: "Banner 2",
          effect: "blur",
          className: "object-contain"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        buildExports.LazyLoadImage,
        {
          src: Banner1,
          alt: "Banner 1",
          effect: "blur",
          className: "object-contain"
        }
      ) })
    ]
  }
);
const BrandItem = ({ brand }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-gray-300 h-24 w-24 rounded-full group cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/products/brand/${brand.slug}`, className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: `${brand.logo}` || keys.DEFAULT_IMG,
      alt: brand.name,
      loading: "lazy",
      className: "w-full h-full rounded-full overflow-hidden object-cover transition-transform duration-300 group-hover:scale-110"
    }
  ) }) });
};
const BrandList = ({ brands }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4e3, min: 1024 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Carousel,
    {
      responsive,
      infinite: true,
      autoPlay: true,
      autoPlaySpeed: 2e3,
      renderDotsOutside: true,
      className: "relative",
      containerClass: "carousel-container",
      arrows: false,
      children: brands.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandItem, { brand: item }) }, index))
    }
  ) });
};
const Brands = () => {
  const { data: brands, isLoading, error } = useGetBrandsQuery({});
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : brands && (brands == null ? void 0 : brands.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow-md shadow-gray-100 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900", children: "All Brands" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/brands", className: "view-box", children: [
        "View All",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleRight, { className: "text-lg " }) })
      ] })
    ] }),
    brands && (brands == null ? void 0 : brands.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsx(BrandList, { brands: brands == null ? void 0 : brands.doc }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Brands not found!" })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Brands not found!" });
};
const StarProducts = ({ icon, title, products }) => {
  return products ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white py-4 px-2 shadow-md rounded-lg shadow-primary-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mx-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center w-fit gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: icon, alt: "icon", className: "w-10 h-10 object-contain" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "view-box", children: [
        "View All",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleRight, { className: "text-lg" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-2 grid-cols-1 lg:gap-2 gap-4", children: products == null ? void 0 : products.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FlatCard, { ...product }, index)) })
  ] }) : null;
};
const TopRatedIcon = "" + new URL("top-rated-Bkt0cJO9.png", import.meta.url).href;
const BestSellingIcon = "" + new URL("best-sellings-DTJGs1nr.png", import.meta.url).href;
const TopProducts = () => {
  const { data: topProducts, isLoading } = useGetTopRatedProductsQuery({});
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : topProducts && (topProducts == null ? void 0 : topProducts.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between lg:flex-row flex-col items-center gap-4 my-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StarProducts,
      {
        icon: BestSellingIcon,
        title: "Best sellings",
        products: topProducts == null ? void 0 : topProducts.docs
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StarProducts,
      {
        icon: TopRatedIcon,
        title: "Top rated",
        products: topProducts == null ? void 0 : topProducts.docs
      }
    )
  ] }) : null;
};
const PromoSaleImage = "" + new URL("promo-sale-CPbW2m8g.webp", import.meta.url).href;
const MegaSaleBanner1 = "" + new URL("mega-sale-BN9JEeMO.webp", import.meta.url).href;
const MegaSaleBanner2 = "" + new URL("super-sale-Dv_0OFRH.webp", import.meta.url).href;
const HomePage = () => {
  const [isLoading, setIsLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Categories, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlashDeal, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureProducts, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedDeal, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: PromoSaleImage,
        alt: "promo sale banner",
        className: "rounded-lg",
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopSeller, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-4 mb-4 flex flex-col items-center w-full lg:flex-row lg:items-start justify-around gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DealOfTheDay,
        {
          image: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-space-gray-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145627000`,
          title: "Laptop",
          loading: "lazy",
          price: 150
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LatestProducts, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center lg:flex-row flex-col gap-4 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: MegaSaleBanner1,
          alt: "mega sale",
          className: "lg:w-1/2 w-full rounded-lg",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: MegaSaleBanner2,
          alt: "mega sale",
          className: "lg:w-1/2 w-full rounded-lg",
          loading: "lazy"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopProducts, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brands, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductsCategory, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesList, {}) })
  ] });
};
const BrandsPage = () => {
  var _a;
  const { data: brands, isLoading } = useGetBrandsQuery({});
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary-100 p-8 rounded-lg mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl uppercase font-bold text-primary-400", children: "ALL Brands" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-primary-400", children: "Find your favourite brands and products" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: brands && (brands == null ? void 0 : brands.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4", children: (_a = brands == null ? void 0 : brands.doc) == null ? void 0 : _a.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(BrandItem, { brand: item }, index)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Brands not found!" }) })
  ] });
};
const ShopBanner = ({ vendor }) => {
  var _a;
  return vendor && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[50vh] mt-4 p-4 rounded-lg shadow-lg max-w-7xl mx-auto py-4 bg-pink-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: `${keys.BUCKET_URL}${vendor.banner}` || keys.DEFAULT_IMG,
        alt: "Shop Banner",
        loading: "lazy",
        className: "absolute inset-0 w-full h-full object-cover rounded-lg"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between w-[500px] z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[240px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg shadow-lg flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: `${keys.BUCKET_URL}${vendor.logo}` || keys.DEFAULT_IMG,
            loading: "lazy",
            alt: "shop logo",
            className: "w-16 h-16 object-cover rounded"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: vendor.shopName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-yellow-500", children: [
            [1, 2, 3, 4].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(AiFillStar, {}, star)),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AiOutlineStar, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-gray-700", children: "(4.8)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-green-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              ((_a = vendor == null ? void 0 : vendor.reviews) == null ? void 0 : _a.length) || 0,
              " Reviews"
            ] }),
            " ",
            "|",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              (vendor == null ? void 0 : vendor.totalOrders) || 0,
              " Orders"
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
const CategorySidebar = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery({});
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : categories && (categories == null ? void 0 : categories.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[300px] p-2 border bg-white-100 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: categories.doc.map((category, index) => {
    if (index <= 10)
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: `/products?category=${category._id}`,
          className: "flex justify-between items-center group  p-1 border-b last:border-none cursor-pointer",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.Typography, { className: "text-gray-700 group-hover:text-primary-600", children: capitalizeFirstLetter(category.name) })
        },
        index
      );
  }) }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No categories found!" });
};
const MobileFilter = () => {
  var _a;
  const [isDrawerOpen, setIsDrawerOpen] = reactExports.useState(false);
  const { data: brands, isLoading: isBrandsLoading } = useGetBrandsQuery({});
  const { data: categories, isLoading: isCategoriesLoading } = useGetCategoriesQuery({});
  const [searchItem, setSearchItem] = reactExports.useState("");
  const [filterBrands, setFilterBrands] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (brands) {
      setFilterBrands(brands == null ? void 0 : brands.doc);
    }
  }, [brands]);
  const handleBrandsSerach = (e) => {
    var _a2;
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredItems = (_a2 = brands == null ? void 0 : brands.doc) == null ? void 0 : _a2.filter(
      (brand) => brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterBrands(filteredItems);
  };
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: openDrawer,
        className: "bg-primary-500 p-2 rounded-lg text-white hover:br-primary-100 block lg:hidden",
        children: isDrawerOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(FiX, { className: "h-6 w-6 stroke-2" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FaFilter, { className: "h-6 w-6 stroke-2" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      react.Drawer,
      {
        open: isDrawerOpen,
        onClose: closeDrawer,
        className: "right-0",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          react.Card,
          {
            shadow: false,
            className: "h-[calc(100vh-2rem)] w-full p-4 custom-scrollbar overflow-y-auto scrollbar-hide",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 mt-2 bg-white w-full max-w-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Filter" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "filterSelect",
                    className: "block text-gray-700",
                    children: "Choose"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    id: "filterSelect",
                    className: "w-full mt-1 border rounded-lg px-3 py-2",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Choose" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium", children: "Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "number",
                      min: "0",
                      placeholder: "0",
                      className: "w-1/2 border rounded-lg px-3 py-2 mr-2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "To" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "number",
                      min: "0",
                      placeholder: "100",
                      className: "w-1/2 border rounded-lg px-3 py-2 mr-2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-primary-500 text-white rounded-lg px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MdArrowForwardIos, {}) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium", children: "Brands" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: searchItem,
                      onChange: handleBrandsSerach,
                      placeholder: "Search by brands",
                      className: "w-full border rounded-lg px-3 py-2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute right-2 top-2 text-gray-400 flex items-center justify-center ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaSearch, { className: "h-4 w-4" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: isBrandsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : filterBrands ? filterBrands.map((brand) => {
                  if (brand.totalProducts > 0)
                    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: `/products/brand/${brand.slug}`,
                        className: "flex justify-between items-center hover:text-primary-700",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: capitalizeFirstLetter(
                            brand.name
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-200 text-gray-700 rounded-full px-3 py-1", children: brand.totalProducts })
                        ]
                      }
                    ) }, brand._id);
                }) : /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No Brands found!" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium", children: "Categories" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: isCategoriesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : categories ? (_a = categories == null ? void 0 : categories.doc) == null ? void 0 : _a.map((category) => {
                if ((category == null ? void 0 : category.totalProducts) > 0)
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: `/products/category/${category.slug}`,
                      className: "flex justify-between items-center hover:text-primary-700",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: capitalizeFirstLetter(
                          category.name
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-200 text-gray-700 rounded-full px-3 py-1", children: category.totalProducts })
                      ]
                    }
                  ) }, category._id);
              }) : /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No Categories found!" }) })
            ] })
          }
        )
      }
    )
  ] });
};
const BrandHeader = ({ products, filters }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    searchParams.set(name, value);
    filters = {
      name: value
    };
    setSearchParams(searchParams);
  };
  const getTitle = () => {
    if (filters.brand) {
      return `Brand Products`;
    } else if (filters.category) {
      return `Category Products`;
    } else if (filters.sort) {
      if (filters.sort === "featured") {
        return "Featured Products";
      } else if (filters.sort === "discount") {
        return "Discount Products";
      }
    }
    return "Products";
  };
  const title = getTitle();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg shadow-lg flex justify-between items-center w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500", children: [
        products == null ? void 0 : products.results,
        " Items found"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:block hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 border-2 border-gray-200  px-2 rounded-lg hover:shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TbSortAscending2, { className: "text-gray-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-gray-700", children: "Sort by:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          className: " pl-4 pr-10 py-2 px-2 focus:outline-none",
          value: searchParams.get("sort") || "",
          onChange: handleFilterChange,
          name: "sort",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "latest", children: "latest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price", children: "Price: Low to High" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "-price", children: "Price: High to Low" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: "A to Z Order" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "-name", children: "Z to A Order" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileFilter, {})
  ] });
};
const img$4 = "" + new URL("no-product-found-DncxVh9z.png", import.meta.url).href;
const ShopViewPage = () => {
  var _a, _b, _c, _d;
  const { slug } = useParams();
  const { data: vendor, isLoading } = useGetVendorBySlugQuery(slug);
  const [currentPage, setCurrentPage] = reactExports.useState(0);
  const [rowsPerPage, setRowsPerPage] = reactExports.useState(10);
  const productCount = ((_a = vendor == null ? void 0 : vendor.doc) == null ? void 0 : _a.totalProducts) || 0;
  const currentProducts = ((_b = vendor == null ? void 0 : vendor.doc) == null ? void 0 : _b.products.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage
  )) || [];
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : vendor && (vendor == null ? void 0 : vendor.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShopBanner, { vendor: vendor == null ? void 0 : vendor.doc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 lg:mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      BrandHeader,
      {
        style: { marginTop: "10px" },
        products: { results: productCount },
        filters: { brand: (_c = vendor == null ? void 0 : vendor.doc) == null ? void 0 : _c.name }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-6 items-start w-full mt-6 lg:mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block lg:w-1/4 bg-white border border-gray-200 rounded-md shadow-lg p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategorySidebar, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-3/4 p-4", children: vendor && ((_d = vendor == null ? void 0 : vendor.doc) == null ? void 0 : _d.totalProducts) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6", children: currentProducts.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { data: product }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TablePagination,
          {
            component: "div",
            count: productCount,
            page: currentPage,
            onPageChange: handleChangePage,
            rowsPerPage,
            onRowsPerPageChange: handleChangeRowsPerPage,
            rowsPerPageOptions: [4, 8, 12]
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg flex mt-20 justify-center items-center w-full text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: img$4,
          alt: "NO Product Found",
          className: "w-[60%] mx-auto"
        }
      ) }) })
    ] })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg bg-red-50 text-red-500 py-4 px-8 mx-auto", children: "Vendor data not found!" });
};
const FilterSidebar = ({ filters }) => {
  var _a, _b;
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: brands, isLoading: isBrandsLoading } = useGetBrandsQuery({});
  const { data: categories, isLoading: isCategoriesLoading } = useGetCategoriesQuery({});
  const [searchItem, setSearchItem] = reactExports.useState("");
  const [filterBrands, setFilterBrands] = reactExports.useState([]);
  const [minPrice, setMinPrice] = reactExports.useState(0);
  const [maxPrice, setMaxPrice] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (brands && (brands == null ? void 0 : brands.doc)) {
      setFilterBrands(brands == null ? void 0 : brands.doc);
    }
  }, [brands]);
  const priceRangeHandler = () => {
    searchParams.set("price[gte]", minPrice);
    searchParams.set("price[lte]", maxPrice);
    if (minPrice > maxPrice) {
      return _t.error("The min price is greater then max price.");
    }
    filters = {
      "price[gte]": minPrice,
      "price[lte]": maxPrice
    };
    setSearchParams(searchParams);
  };
  const handleBrandsSerach = (e) => {
    var _a2;
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredItems = (_a2 = brands == null ? void 0 : brands.doc) == null ? void 0 : _a2.filter(
      (brand) => brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterBrands(filteredItems);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 mt-2 bg-white p-6 rounded-lg shadow-lg w-full max-w-xs hidden lg:block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Filter" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "filterSelect", className: "block text-gray-700", children: "Choose" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-2 border-2 border-gray-200  px-2 rounded-lg hover:shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          id: "filterSelect",
          className: "w-full pl-4 pr-10 py-2 px-2 focus:outline-none",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, children: "Choose" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Best Selling" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Top Rated" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Most Favorite" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Featured Deal" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b-2 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium", children: "Price" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            min: "0",
            value: minPrice,
            onChange: (e) => setMinPrice(e.target.value),
            placeholder: "0",
            className: "w-1/2 input px-3 py-2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "To" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            min: "0",
            value: maxPrice,
            onChange: (e) => setMaxPrice(e.target.value),
            placeholder: "100",
            className: "w-1/2 input px-3 py-2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: priceRangeHandler,
            className: "bg-primary-500 text-white rounded-lg px-3 py-3",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(MdArrowForwardIos, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 overflow-hidden border-b-2 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Brands" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: searchItem,
            onChange: handleBrandsSerach,
            placeholder: "Search by brands",
            className: "w-full input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute right-2 top-2 text-gray-400 flex items-center justify-center ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaSearch, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: isBrandsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : filterBrands ? filterBrands.map((brand) => {
        if (brand.totalProducts > 0)
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `/products/brand/${brand.slug}`,
              className: "flex justify-between items-center hover:text-primary-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: capitalizeFirstLetter(
                  brand.name
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-200 text-gray-700 rounded-full px-3 py-1", children: brand.totalProducts })
              ]
            }
          ) }, brand._id);
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No Brands found!" }) })
    ] }),
    isCategoriesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : categories && ((_a = categories == null ? void 0 : categories.doc) == null ? void 0 : _a.length) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold my-2", children: "Categories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: (_b = categories == null ? void 0 : categories.doc) == null ? void 0 : _b.map((category) => {
        if ((category == null ? void 0 : category.totalProducts) > 0)
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `/products/category/${category.slug}`,
              className: "flex justify-between items-center hover:text-primary-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: capitalizeFirstLetter(
                  category.name
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gray-200 text-gray-700 rounded-full px-3 py-1", children: category.totalProducts })
              ]
            }
          ) }, category._id);
      }) })
    ] }) : null
  ] });
};
const ProductsPage = () => {
  var _a;
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = reactExports.useState(false);
  const [currentPage, setCurrentPage] = reactExports.useState(0);
  const [rowsPerPage, setRowsPerPage] = reactExports.useState(10);
  let filters = {};
  for (let [param, value] of searchParams.entries()) {
    filters[param] = value;
    if (param === "discount") {
      filters = { sort: "discount" };
    }
    if (param === "featured") {
      filters = { isFeatured: true };
    }
  }
  console.log(filters);
  const { data: products, isLoading } = useGetProductsQuery({
    sort: "discount"
  });
  reactExports.useEffect(() => {
    setLoading(isLoading);
  }, [products, isLoading]);
  const totalProducts = (products == null ? void 0 : products.results) || 0;
  const startIndex = currentPage * rowsPerPage;
  const currentProducts = ((_a = products == null ? void 0 : products.doc) == null ? void 0 : _a.slice(startIndex, startIndex + rowsPerPage)) || [];
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };
  return loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : products ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 w-full mx-auto py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BrandHeader, { filters, products }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-4 my-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSidebar, { filters }),
      currentProducts.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 transition-all ease-in duration-300", children: currentProducts.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { data: product }, index)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg flex mt-20 justify-center items-center w-full text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: img$4,
          alt: "NO Product Found",
          className: "w-[60%] mx-auto"
        }
      ) })
    ] }),
    totalProducts > rowsPerPage && /* @__PURE__ */ jsxRuntimeExports.jsx(
      TablePagination,
      {
        component: "div",
        count: totalProducts,
        page: currentPage,
        onPageChange: handleChangePage,
        rowsPerPage,
        onRowsPerPageChange: handleChangeRowsPerPage
      }
    )
  ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center p-12", children: "Products not found!" });
};
const img$3 = "" + new URL("sell-with-us-Dtr8LN9b.png", import.meta.url).href;
const features$1 = [
  {
    title: "Easy Onboarding",
    description: "Start selling quickly with our user-friendly onboarding process designed to get you up and running fast."
  },
  {
    title: "24/7 Support",
    description: "Get round-the-clock support from our dedicated team to resolve any issues and assist you anytime."
  },
  {
    title: "SEO Friendly",
    description: "Enjoy enhanced search visibility with our SEO-friendly platform, driving more traffic to your listings."
  },
  {
    title: "Free Marketing",
    description: "Benefit from our extensive, no-cost marketing efforts to boost your visibility and sales."
  },
  {
    title: "Millions of Users",
    description: "Access a vast audience with millions of active users ready to buy your products."
  }
];
const WhySellWithUs = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " w-full flex flex-col justify-between items-center gap-4 px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 p-4 lg:w-1/2 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl  text-gray-900", children: "Why Sell With Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-gray-800 p-4", children: "Boost your sales! Join us for a seamless, profitable experience with vast buyer reach and top-notch support. Sell smarter today!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: img$3,
        alt: "Why Sell With Us",
        className: "w-80 max-w-md mx-auto"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4", children: features$1.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm  text-gray-900 mb-4", children: feature.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-center", children: feature.description })
    ] }, index)) })
  ] }) });
};
const step1 = "" + new URL("step1-BYU1iiHd.png", import.meta.url).href;
const step2 = "" + new URL("step2-FAt3FNAy.png", import.meta.url).href;
const step3 = "" + new URL("step3-BnraLttG.png", import.meta.url).href;
const steps = [
  {
    title: "Get Registered",
    description: "Sign up easily and create your seller account in just a few minutes. It's fast and simple to get started.",
    img: step1
  },
  {
    title: "Upload Products",
    description: "List your products with detailed descriptions and high-quality images to attract more buyers effortlessly.",
    img: step2
  },
  {
    title: "Start Selling",
    description: "Go live and start reaching millions of potential buyers immediately. Watch your sales grow with our vast audience.",
    img: step3
  }
];
const SellingSteps = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col bg-primary-600 rounded-lg text-white p-4 md:p-6 lg:p-8 items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-center mb-8", children: "3 Easy Steps To Start Selling" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center mb-8 lg:w-1/2 w-full", children: "Start selling quickly! Register, upload your products with detailed info and images, and reach millions of buyers instantly." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex lg:flex-row flex-col lg:gap-20 md:gap-10 gap-6", children: steps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-72 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " p-4  mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: step.img, alt: step.title, className: "w-32 mx-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: step.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: step.description })
    ] }, index)) })
  ] });
};
const phoneimg = "" + new URL("phone-xVQiI7Lx.png", import.meta.url).href;
const VandorApp = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex lg:flex-row flex-col w-full bg-primary-100 p-8 my-[150px] rounded-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center items-center p-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: phoneimg, alt: "Phone", className: "w-96 h-96 object-contain" }),
      " "
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center items-center lg:w-1/2 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "lg:text-4xl font-bold md:text-3xl text-xl mb-4", children: "Download Free Vendor App" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-center", children: "Download our free seller app and start reaching millions of buyers on the go! Easy setup, manage listings, and boost sales anywhere." })
    ] })
  ] });
};
const SellerFaqs = [
  {
    question: "How do I handle customer inquiries?",
    answer: "You can manage customer inquiries directly through our platform's messaging system, ensuring quick and efficient communication."
  },
  {
    question: "How do I upload products?",
    answer: 'To upload products, go to the "Upload Products" section in your dashboard and follow the instructions provided.'
  },
  {
    question: "What are the fees for selling?",
    answer: "The fees for selling on our platform depend on the product category and the type of seller account you have. Please refer to our fees section for detailed information."
  },
  {
    question: "How do I register as a seller?",
    answer: 'To register as a seller, click on the "Get Registered" button on our homepage and fill out the registration form.'
  }
];
const FaqsAccordions = () => {
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: SellerFaqs.map((faq2, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "w-full transition duration-300 ease-in-out text-left bg-gray-100 p-4 rounded-md flex justify-between items-center",
        onClick: () => toggleFAQ(index),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: faq2.question }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: openIndex === index ? "-" : "+" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-screen" : "max-h-0"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-4 rounded-md mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: faq2.answer }) })
      }
    )
  ] }, index)) });
};
const FAQSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 text-gray-900 lg:p-8 md:p-6 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl text-center mb-4", children: "Frequently Asked Questions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center mb-8 lg:w-1/2 w-full mx-auto", children: "Got questions about becoming a vendor? Explore our vendor FAQ section for answers to any queries you may have abouwt joining our platform as a vendor." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaqsAccordions, {}) })
  ] });
};
const SellerRegForm2 = ({
  errors,
  logoImages,
  setLogoImages,
  bannerImages,
  setBannerImages,
  vendorImages,
  setVendorImages
}) => {
  const { register, control } = useFormContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl lg:text-2xl font-semibold mb-4 lg:mb-6", children: "Vendor Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start lg:gap-10 md:flex-row flex-col w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "First Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ...register("firstName"),
              type: "text",
              className: `input ${errors.firstName ? "border-red-500" : ""}`,
              placeholder: "Ex: John"
            }
          ),
          errors.firstName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.firstName.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Last Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ...register("lastName"),
              type: "text",
              className: `input ${errors.lastName ? "border-red-500" : ""}`,
              placeholder: "Ex: Doe"
            }
          ),
          errors.lastName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.lastName.message })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Vendor Image" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Controller,
          {
            control,
            name: "vendorImage",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              _default,
              {
                value: vendorImages,
                onChange: (imageList) => {
                  var _a;
                  setVendorImages(imageList);
                  field.onChange((_a = imageList[0]) == null ? void 0 : _a.file);
                },
                dataURLKey: "data_url",
                children: ({ imageList, onImageUpload }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload__image-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: onImageUpload,
                    className: "flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-400 rounded-md cursor-pointer",
                    children: imageList.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: imageList[0]["data_url"],
                        alt: "Vendor image Preview",
                        className: "w-full h-full object-cover rounded-md"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FiUpload, { className: "text-gray-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Upload File" })
                    ] })
                  }
                ) })
              }
            )
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Shop Logo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          control,
          name: "logo",
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            _default,
            {
              value: logoImages,
              onChange: (imageList) => {
                var _a;
                setLogoImages(imageList);
                field.onChange((_a = imageList[0]) == null ? void 0 : _a.file);
              },
              dataURLKey: "data_url",
              children: ({ imageList, onImageUpload }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload__image-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onImageUpload,
                  className: "flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-400 rounded-md cursor-pointer",
                  children: imageList.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: imageList[0]["data_url"],
                      alt: "Logo Preview",
                      className: "w-full h-full object-cover rounded-md"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FiUpload, { className: "text-gray-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Upload File" })
                  ] })
                }
              ) })
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Shop Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ...register("shopName"),
          type: "text",
          className: `input ${errors.shopName ? "border-red-500" : ""}`,
          placeholder: "Ex: XYZ store"
        }
      ),
      errors.shopName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.shopName.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Shop Address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ...register("address"),
          type: "text",
          className: `input ${errors.address ? "border-red-500" : ""}`,
          placeholder: "Shop address"
        }
      ),
      errors.address && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.address.message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Shop Banner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Controller,
        {
          control,
          name: "banner",
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            _default,
            {
              value: bannerImages,
              onChange: (imageList) => {
                var _a;
                setBannerImages(imageList);
                field.onChange((_a = imageList[0]) == null ? void 0 : _a.file);
              },
              dataURLKey: "data_url",
              children: ({ imageList, onImageUpload }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload__image-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onImageUpload,
                  className: "flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-400 rounded-md cursor-pointer",
                  children: imageList.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: imageList[0]["data_url"],
                      alt: "Shop Banner Preview",
                      className: "w-full h-full object-cover rounded-md"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FiUpload, { className: "text-gray-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Upload File" })
                  ] })
                }
              ) })
            }
          )
        }
      )
    ] })
  ] });
};
const SellerRegForm1 = ({ errors }) => {
  const { register } = useFormContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row justify-between items-center gap-6 bg-primary-100 py-10 px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center items-center mb-6 lg:mb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl lg:text-3xl text-center lg:text-left", children: "Vendor Registration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm lg:text-base text-center lg:text-left", children: [
        "Create your own store. Already have store?",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/vendor/auth/login",
            className: "text-primary-500 text-lg lg:text-xl font-bold ml-2",
            children: "Login"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "https://6valley.6amtech.com/public/assets/front-end/img/media/seller-registration.png",
          alt: "vendor",
          className: "h-40 w-40 lg:h-64 lg:w-64 object-contain mt-4 lg:mt-0"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white p-4 md:p-6 lg:p-8 rounded-lg flex-grow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-center lg:text-left", children: "Account Information" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 grid-cols-1 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ...register("email"),
              type: "email",
              className: `input ${errors.email ? "border-red-500" : ""}`,
              placeholder: "Enter email address"
            }
          ),
          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.email.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ...register("password"),
              type: "password",
              className: `input ${errors.password ? "border-red-500" : ""}`,
              placeholder: "Enter password"
            }
          ),
          errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.password.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Confirm Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ...register("confirmPassword"),
              type: "password",
              className: `input ${errors.confirmPassword ? "border-red-500" : ""}`,
              placeholder: "Confirm password"
            }
          ),
          errors.confirmPassword && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.password.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Phone Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              defaultCountry: "pk",
              ...register("phoneNumber"),
              className: `custom-phone-input ${errors.password ? "border-red-500" : ""}`,
              inputClassName: "custom-phone-input"
            }
          ),
          errors.phoneNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs italic", children: errors.phoneNumber.message })
        ] })
      ] })
    ] })
  ] });
};
const schema$2 = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters").regex(
    /[a-z]/,
    "Password must contain at least one lowercase letter"
  ).regex(
    /[A-Z]/,
    "Password must contain at least one uppercase letter"
  ).regex(/[0-9]/, "Password must contain at least one number").regex(
    /[^a-zA-Z0-9]/,
    "Password must contain at least one special character"
  ),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  shopName: z.string().min(1, "Shop name is required"),
  address: z.string().min(3, "Shop address is required"),
  logo: z.any(),
  banner: z.any(),
  vendorImage: z.any()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});
const MultiStepForm = () => {
  const [logoImages, setLogoImages] = reactExports.useState([]);
  const [bannerImages, setBannerImages] = reactExports.useState([]);
  const [vendorImages, setVendorImages] = reactExports.useState([]);
  const [step, setStep] = reactExports.useState(0);
  const [vendorRegister, { isLoading }] = useVendorRegisterMutation();
  const methods = useForm({
    resolver: t(schema$2),
    mode: "onSubmit",
    // Validates only on form submission
    reValidateMode: "onChange"
    // Validates on each change after initial submission
  });
  const navigate = useNavigate();
  const isPasswordStrong = (password) => {
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasMinLength && hasUppercase && hasNumber && hasSpecialChar;
  };
  const handleNext = async () => {
    const isValid = await methods.trigger([
      "email",
      "password",
      "confirmPassword",
      "phoneNumber"
    ]);
    if (!isValid) {
      _t.error("Please fill all the required inputs.");
      return;
    }
    const { password, confirmPassword } = methods.getValues();
    if (!isPasswordStrong(password)) {
      return _t.error(
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character."
      );
    }
    if (password !== confirmPassword) {
      return _t.error("Passwords do not match");
    }
    if (step === 0) {
      setStep(step + 1);
    }
  };
  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  async function uploadImage(uploadConfig, file) {
    try {
      await uploadImageToS3(uploadConfig.url, file);
      return uploadConfig.key;
    } catch (error) {
      console.error(`Failed to upload ${file.name}:`, error);
      return null;
    }
  }
  const onSubmit = async (data) => {
    var _a, _b, _c, _d;
    const uploadedKeys = [];
    try {
      const logoFile = ((_a = logoImages == null ? void 0 : logoImages[0]) == null ? void 0 : _a.file) || null;
      const bannerFile = ((_b = bannerImages == null ? void 0 : bannerImages[0]) == null ? void 0 : _b.file) || null;
      const vendorFile = ((_c = vendorImages == null ? void 0 : vendorImages[0]) == null ? void 0 : _c.file) || null;
      const [logoUploadConfig, bannerUploadConfig, vendorUploadConfig] = await Promise.all([
        getUploadUrl(logoFile.type, "vendors"),
        getUploadUrl(bannerFile.type, "vendors"),
        getUploadUrl(vendorFile.type, "vendors")
      ]);
      uploadedKeys.push(await uploadImage(logoUploadConfig, logoFile));
      uploadedKeys.push(await uploadImage(bannerUploadConfig, bannerFile));
      uploadedKeys.push(await uploadImage(vendorUploadConfig, vendorFile));
      const successfulUploads = uploadedKeys.filter((key) => key !== null);
      if (successfulUploads.length < 3) {
        await deleteUploadedImages(successfulUploads);
        _t.error(
          "Image upload failed, deleted previously uploaded images."
        );
        return;
      }
      if (data.password !== data.confirmPassword) {
        _t.error("Passwords do not match");
        return;
      }
      data.confirmPassword = void 0;
      const finalData = {
        ...data,
        logo: successfulUploads[0],
        banner: successfulUploads[1],
        vendorImage: successfulUploads[2]
      };
      await vendorRegister(finalData).unwrap();
      _t.success("Vendor registered successfully");
      navigate("/auth/vendor/login");
    } catch (err) {
      _t.error(((_d = err == null ? void 0 : err.data) == null ? void 0 : _d.message) || err.error);
      console.error("Error: ", err);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormProvider, { ...methods, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: methods.handleSubmit(onSubmit), children: [
    step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SellerRegForm1, { errors: methods.formState.errors }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "btn primary-btn cursor-pointer",
          type: "button",
          onClick: handleNext,
          children: "Next"
        }
      ) })
    ] }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SellerRegForm2,
        {
          errors: methods.formState.errors,
          logoImages,
          setLogoImages,
          bannerImages,
          setBannerImages,
          vendorImages,
          setVendorImages
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-4", children: [
        step > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "btn secondary-btn",
            type: "button",
            onClick: handlePrev,
            children: "Previous"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "btn primary-btn justify-self-end cursor-pointer",
            type: "submit",
            disabled: isLoading,
            children: isLoading ? "Loading..." : "Submit"
          }
        )
      ] })
    ] })
  ] }) }) });
};
const VendorRegisterPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-grow bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MultiStepForm, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhySellWithUs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SellingSteps, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VandorApp, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSection, {})
    ] })
  ] });
};
const StoreList = ({ sellers }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full py-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  gap-4", children: sellers == null ? void 0 : sellers.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(SellerCard, { data: item }, item._id)) });
};
const VendorsPage = () => {
  const { data: vendors, isLoading } = useGetVendorsQuery({});
  const [filteredVendors, setFilteredVendors] = reactExports.useState([]);
  const [keywords, setKeywords] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (vendors && (vendors == null ? void 0 : vendors.doc)) {
      setFilteredVendors(vendors.doc);
    }
  }, [vendors]);
  const handleInputChange = (e) => {
    var _a;
    const keywords2 = e.target.value;
    setKeywords(keywords2);
    const filteredItems = (_a = vendors == null ? void 0 : vendors.doc) == null ? void 0 : _a.filter(
      (seller) => seller.shopName.toLowerCase().includes(keywords2.toLowerCase())
    );
    setFilteredVendors(filteredItems);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary-100 p-4 lg:p-8 rounded-lg flex lg:flex-row flex-col gap-2 justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl uppercase font-bold text-primary-400", children: "ALL STORES" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-primary-400", children: "Find your desired stores and shop your favourite products" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "flex-grow p-2 border outline-none focus:border-primary-100 rounded rounded-r-none",
            placeholder: "Search Store",
            value: keywords,
            onChange: handleInputChange
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-2 bg-primary-400 text-white rounded rounded-l-none outline-none border-none", children: "Serach" })
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : vendors && filteredVendors ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: (filteredVendors == null ? void 0 : filteredVendors.length) ? /* @__PURE__ */ jsxRuntimeExports.jsx(StoreList, { sellers: filteredVendors }) : keywords && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "w-full bg-blue-50 text-lg p-8", children: [
      "This Store",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: `"${keywords}"` }),
      " ",
      "not found!.. Please try another keywords`"
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Stores not found!" })
  ] });
};
const addressSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(3, "City is required"),
  zipCode: z.string().min(3, "Zip code is required"),
  state: z.string().min(3, "State is required"),
  address: z.string().min(3, "Address is required")
});
const paymentSchema = z.object({
  paymentMethod: z.string().min(1, "Payment method is required")
});
const paymentMethods = [
  { value: "cash_on_delivery", label: "Cash on Delivery", imgSrc: "https://img.freepik.com/premium-vector/cash-delivery_569841-175.jpg?semt=ais_hybrid" },
  { value: "credit-card", label: "Credit Card", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eHuZdO5eG-fP00sXeZNnBPwjVUbs3VLW7g&s" },
  { value: "jazzcash", label: "JazzCash", imgSrc: "https://www.jazzcash.com.pk/assets/themes/jazzcash/img/mobilink_logo.png" },
  { value: "easypaisa", label: "EasyPaisa", imgSrc: "https://easypaisa.com.pk/wp-content/uploads/2022/12/Group-129.png" }
];
const PaymentMethod = () => {
  const { setValue, formState: { errors } } = useFormContext();
  const [selectedMethod, setSelectedMethod] = reactExports.useState("");
  const handleSelectMethod = (value) => {
    setSelectedMethod(value);
    setValue("paymentMethod", value, { shouldValidate: true });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Payment Method" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4", children: paymentMethods.map((method) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `flex items-center justify-center border-2 p-2 rounded-md cursor-pointer ${selectedMethod === method.value ? "border-primary-400" : "border-gray-200"}`,
        onClick: () => handleSelectMethod(method.value),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: method.imgSrc, alt: method.label, className: "w-20 h-20 object-contain m-2" })
      },
      method.value
    )) }),
    errors.paymentMethod && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.paymentMethod.message })
  ] }) });
};
const ShippingAddress = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " mt-4 flex justify-center items-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " w-full ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold mb-6", children: "Shipping Address" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6 ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Contact person name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "input",
              placeholder: "Aqib Ahmed",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Phone Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ue,
            {
              defaultCountry: "pk",
              className: "custom-phone-input",
              inputClassName: "custom-phone-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Address type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Permanent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Temporary" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Country *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "input",
              placeholder: "Pakistan",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "City *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "input",
              placeholder: "Islamabad",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Zip code *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "input",
              placeholder: "45710",
              required: true
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Address *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "input",
            placeholder: "Soan Garden",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            className: "h-4 w-4 text-indigo-600 border-gray-300 rounded"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-sm text-gray-700", children: "Save this Address" })
      ] }) })
    ] })
  ] }) }) });
};
const ShippingMethod = () => {
  const [address, setAddress] = reactExports.useState("");
  const [weight, setWeight] = reactExports.useState("");
  const [shippingCost, setShippingCost] = reactExports.useState(null);
  const [error, setError] = reactExports.useState("");
  const [shippingMethod, setShippingMethod] = reactExports.useState("leopards");
  const fetchShippingRate = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("/shipping/leopards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, weight })
      });
      if (!response.ok) throw new Error("Failed to fetch shipping cost");
      const data = await response.json();
      setShippingCost(data.rate);
    } catch (error2) {
      setError(error2.message);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Shipping Method" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: fetchShippingRate, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: address,
            onChange: (e) => setAddress(e.target.value),
            required: true,
            className: "input",
            rows: "4"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Weight (kg)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: weight,
            onChange: (e) => setWeight(e.target.value),
            required: true,
            className: "input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Shipping Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: shippingMethod,
            onChange: (e) => setShippingMethod(e.target.value),
            className: "input",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "leopards", children: "Leopards" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "trax", children: "Trax" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-300 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Save"
        }
      ) }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500", children: error })
    ] }),
    shippingCost && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-lg", children: [
      "Shipping Cost: ",
      shippingCost
    ] })
  ] });
};
const BillingAddressForm = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  const [isSameAddress, setIsSameAddress] = reactExports.useState(false);
  const handleCheckboxChange = () => {
    setIsSameAddress(!isSameAddress);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-gray-900 font-bold text-xl mb-4", children: "Billing Address" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-4 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            ...register("name"),
            className: "input"
          }
        ),
        errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.name.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Phone Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            defaultCountry: "pk",
            ...register("phoneNumber"),
            className: "custom-phone-input",
            inputClassName: "custom-phone-input"
          }
        ),
        errors.phoneNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.phoneNumber.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Country" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            ...register("country"),
            className: "input"
          }
        ),
        errors.country && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.country.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "City" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            ...register("city"),
            className: "input"
          }
        ),
        errors.city && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.city.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "State" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            ...register("state"),
            className: "input"
          }
        ),
        errors.state && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.state.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Zip Code" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            ...register("zipCode"),
            className: "input"
          }
        ),
        errors.zipCode && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.zipCode.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            ...register("address"),
            className: "input"
          }
        ),
        errors.address && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.address.message })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "checkbox",
          id: "sameAddress",
          checked: isSameAddress,
          onChange: handleCheckboxChange,
          className: "mr-2"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "sameAddress", className: "text-gray-700", children: "Shipping address is the same as billing address" })
    ] }),
    !isSameAddress && /* @__PURE__ */ jsxRuntimeExports.jsx(ShippingAddress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShippingMethod, {})
  ] }) });
};
const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: order
      })
    }),
    getOrderDetails: builder.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`
      }),
      keepUnusedDataFor: 5
    }),
    payOrder: builder.mutation({
      query: ({ orderId, details }) => ({
        url: `${ORDERS_URL}/${orderId}/pay`,
        method: "PUT",
        body: details
      })
    }),
    getMyOrders: builder.query({
      //order details by customer order
      query: (id) => ({
        url: `${ORDERS_URL}?customer=${id}`
      }),
      keepUnusedDataFor: 5
    }),
    getOrders: builder.query({
      query: () => ({
        url: ORDERS_URL
      }),
      keepUnusedDataFor: 5
    }),
    deliverOrder: builder.mutation({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}/deliver`,
        method: "PUT"
      })
    })
  })
});
const {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useDeliverOrderMutation
} = orderApiSlice;
const CartSummary = ({ cart, handleNext, isLoading = false, step = 0 }) => {
  const btnDisable = (cart == null ? void 0 : cart.totalQty) === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-1/2 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow-md rounded-lg p-2", children: [
    (cart == null ? void 0 : cart.totalDiscount) && /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg text-primary-400 border-b flex justify-center items-center gap-2 text-center font-semibold mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MdOutlineCelebration, { className: "w-6 h-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "You have Saved Rs.",
        " ",
        formatPrice(cart == null ? void 0 : cart.totalDiscount),
        "!"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " border-gray-200 py-2  text-gray-800 font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sub total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Rs.",
            formatPrice((cart == null ? void 0 : cart.subTotal) || 0)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tax" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Rs.",
            formatPrice((cart == null ? void 0 : cart.taxPrice) || 0)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Rs.",
            formatPrice((cart == null ? void 0 : cart.totalShippingPrice) || 0)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Discount on product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Rs. -",
            formatPrice((cart == null ? void 0 : cart.totalDiscount) || 0)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-600", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Rs.",
            formatPrice((cart == null ? void 0 : cart.totalPrice) || 0)
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-center mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaTruck, { className: "text-2xl text-blue-500 mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "Fast Delivery all across the country" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaShieldAlt, { className: "text-2xl text-primary-500 mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "Safe Payment" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaUndo, { className: "text-2xl text-orange-500 mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "7 Days Return Policy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaCheckCircle, { className: "text-2xl text-indigo-500 mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "100% Authentic Products" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between flex-col items-center gap-2 ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleNext,
            type: "submit",
            disabled: btnDisable,
            className: `w-full text-center outline-none text-white rounded-lg shadow py-2 px-4 transition duration-300 ${btnDisable ? "bg-primary-300 " : "bg-primary-500 hover:bg-primary-400"}`,
            children: isLoading ? "Loading..." : step === 1 ? "Place Order" : "Proceed to Checkout"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/products",
            className: " text-primary-400 py-1 transition duration-300",
            children: "< Continue Shopping"
          }
        )
      ] })
    ] })
  ] }) });
};
const CheckoutPage = () => {
  const [step, setStep] = reactExports.useState(0);
  const { userInfo } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (!userInfo || !(userInfo == null ? void 0 : userInfo.user)) {
      navigate("/customer/auth/sign-in");
    }
  }, [navigate, userInfo]);
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const methods = useForm({
    resolver: t(step === 0 ? addressSchema : paymentSchema),
    mode: "onSubmit",
    // Validates only on form submission
    reValidateMode: "onChange"
    // Validates on each change after initial submission
  });
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const handleNext = async () => {
    var _a, _b, _c;
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const isValid = await methods.trigger();
      if (!isValid) {
        _t.error("Please fill all the required fields.");
        setIsSubmitting(false);
        return;
      }
      if (step === 0) {
        const shippingAddress = methods.getValues();
        dispatch(saveShippingAddress(shippingAddress));
        dispatch(saveBillingAddress(shippingAddress));
        setStep(step + 1);
      } else {
        try {
          const { paymentMethod } = methods.getValues();
          dispatch(savePaymentMethod(paymentMethod));
          let productIds = cart == null ? void 0 : cart.cartItems.map((item) => item._id);
          const order = {
            products: productIds,
            customerId: (_a = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _a._id,
            shippingAddress: cart == null ? void 0 : cart.shippingAddress,
            billingAddress: cart == null ? void 0 : cart.billingAddress,
            paymentMethod,
            totalAmount: cart == null ? void 0 : cart.totalPrice,
            vendors: cart == null ? void 0 : cart.vendors
          };
          const res = await createOrder(order).unwrap();
          _t.success("Order created successfully");
          dispatch(clearCartItems());
          navigate(`/order-confirmation/${(_b = res == null ? void 0 : res.data) == null ? void 0 : _b._id}`);
        } catch (err) {
          console.error(err == null ? void 0 : err.data);
          _t.error(((_c = err == null ? void 0 : err.data) == null ? void 0 : _c.message) || "Something went wrong");
        }
      }
    } catch (err) {
      console.error(err);
      _t.error(err.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };
  return userInfo && (userInfo == null ? void 0 : userInfo.user) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full p-4 sm:p-6 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormProvider, { ...methods, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: methods.handleSubmit(handleNext),
      className: "flex flex-col lg:flex-row gap-8",
      children: [
        step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(BillingAddressForm, { onClick: handleNext, disabled: isLoading }),
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentMethod, { onClick: handleNext, disabled: isLoading }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CartSummary,
          {
            cart,
            handleNext,
            isLoading,
            step
          }
        )
      ]
    }
  ) }) });
};
const faqData = [
  {
    question: "Can orders be placed using E-Baazaar App?",
    answer: "Yes, orders can be placed using the E-Baazaar App. It is user-friendly and allows easy order placement."
  },
  {
    question: "Is it important for me to educate the customer before placing order?",
    answer: "Yes, educating the customer before placing an order ensures they are aware of the product details and policies."
  },
  {
    question: "Why my id is blocked/blacklisted?",
    answer: "Your ID might be blocked or blacklisted due to violation of our policies or repeated fraudulent activities."
  },
  {
    question: "Why my orders get canceled?",
    answer: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cancellation from customer side." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Product is out of stock." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "System recognizes it as a fraud order." })
    ] })
  }
];
const FaqPage = () => {
  const [open, setOpen] = reactExports.useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container  mx-auto p-4 items-center ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4 flex justify-center text-center border-b", children: "Frequently Asked Question" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center w-full h-96", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-8 w-[60%] items-center", children: faqData.map((faq2, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(react.Accordion, { open: open === index + 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        react.AccordionHeader,
        {
          onClick: () => handleOpen(index + 1),
          className: "text-sm",
          children: faq2.question
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(react.AccordionBody, { children: faq2.answer })
    ] }, index)) }) })
  ] });
};
const ContactForm = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md w-full max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Send us a message" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700", children: "Your name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "John Doe", className: "input" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700", children: "Email address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              placeholder: "Enter email address",
              className: "input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Phone Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PhoneInput,
            {
              country: "pk",
              inputClass: "input",
              inputStyle: {
                appearance: "none",
                border: "1px solid #e2e8f0",
                // border-gray-300
                borderRadius: "0.375rem",
                // rounded
                width: "92%",
                // w-full
                padding: "0.75rem 1.5rem",
                // py-2 px-3
                marginLeft: "2rem",
                color: "#4a5568",
                // text-gray-700
                lineHeight: "1.25",
                // leading-tight
                outline: "none",
                boxShadow: "0 0 0 1px #c6f6d5",
                // focus:outline-1 outline-green-100
                transition: "box-shadow 0.2s ease-in-out"
              },
              placeholder: "Enter phone number"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700", children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Short title", className: "input" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            placeholder: "Type your message here...",
            className: "input h-32"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "g-recaptcha", "data-sitekey": "your_site_key" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn primary-btn", children: "Send" }) })
    ] })
  ] }) });
};
const img$2 = "" + new URL("contact-B6aKbEhO.png", import.meta.url).href;
const ContactUsPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "lg:text-2xl text-xl text-center font-bold", children: "Contact Us" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex lg:flex-row flex-col lg:p-8 md:p-6 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: img$2,
          alt: "contact us",
          className: "p-8 w-[40rem] object-contain "
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) })
    ] })
  ] });
};
const AboutUsPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl  mb-4 text-center", children: "About Our Company" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 flex-col gap-2 text-justify", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-4", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum massa et dolor porta, rhoncus faucibus magna elementum. Sed porta mattis mollis. Donec ut est pretium, pretium nibh porttitor, suscipit metus. Sed viverra felis sed elit vehicula sodales. Nullam ante ante, tristique vel tincidunt ac, egestas eget sem. Sed lorem nunc, pellentesque vel ipsum venenatis, pellentesque interdum orci. Suspendisse mauris dui, accumsan at dapibus sed, volutpat quis erat. Nam fringilla nisl eu nunc lobortis, feugiat posuere libero venenatis. Nunc risus lorem, ornare eget congue in, pretium quis enim. Pellentesque elit elit, pharetra eget nunc at, maximus pellentesque diam." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-4", children: "Praesent fermentum finibus lacus. Nulla tincidunt lectus sed purus facilisis hendrerit. Maecenas volutpat elementum orci, tincidunt euismod ante facilisis ac. Integer dignissim iaculis varius. Mauris iaculis elit vel posuere pellentesque. Praesent a mi sed neque ullamcorper dignissim sed ut nibh. Sed purus dui, sodales in varius in, accumsan at libero. Vestibulum posuere dui et orci tincidunt, ac consequat felis venenatis." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-4", children: "Morbi sodales, nisl iaculis fringilla imperdiet, metus tortor semper quam, a fringilla nulla dui nec dolor. Phasellus lacinia aliquam ligula sed porttitor. Cras feugiat eros ut arcu commodo dictum. Integer tincidunt nisl id nisl consequat molestie. Integer elit tortor, ultrices sit amet nunc vitae, feugiat tempus mauris. Morbi volutpat consectetur felis sed porttitor. Praesent in urna erat.." })
    ] })
  ] });
};
const CartItem = ({ item }) => {
  const [qty, setQty] = reactExports.useState(0);
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    if (item == null ? void 0 : item.qty) {
      setQty(item.qty);
    }
  }, [item.qty]);
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return item && qty > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-3 flex gap-3 justify-between items-center rounded-lg shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/products/${item.slug}`, className: "cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: (item == null ? void 0 : item.thumbnail) ? `${item.thumbnail}` : keys.DEFAULT_IMG,
          alt: item.name,
          loading: "lazy",
          className: "h-20 object-cover rounded-md"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `/products/${item.slug}`,
            className: "cursor-pointer hover:text-gray-600",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              react.Typography,
              {
                variant: "h3",
                className: "font-medium text-lg w-48 md:60 lg:96 truncate",
                children: item.name
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500 text-sm", children: [
          "Stock: ",
          item.stock
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          react.Typography,
          {
            variant: "paragraph",
            className: "text-sm text-gray-600",
            children: [
              "Price: Rs.",
              formatPrice(item.price)
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeFromCartHandler(item._id),
          className: "text-inherit cursor-pointer",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTrash, { className: "text-sm text-red-300 hover:text-red-400" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quantity, { qty, setQty, product: item }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        react.Typography,
        {
          variant: "paragraph",
          className: "font-bold align-middle text-base",
          children: [
            "Total: Rs.",
            formatPrice(item.qty * item.price)
          ]
        }
      )
    ] })
  ] }) : null;
};
const CartList = ({ cartItems }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 flex flex-col justify-center gap-2", children: cartItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(CartItem, { item }, item._id)) });
};
const EmptyCart = "" + new URL("empty-cart-DWkYsdnU.png", import.meta.url).href;
const ShoppingCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 w-full bg-white shadow-md rounded-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Shopping Cart" }),
    cartItems && cartItems.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(CartList, { cartItems }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: EmptyCart,
          alt: "empty cart",
          className: "w-full h-80 object-contain"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-800 font-semibold", children: "Your Cart Is Empty!" })
    ] })
  ] });
};
const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleNext = () => {
    var _a;
    ((_a = cart == null ? void 0 : cart.cartItems) == null ? void 0 : _a.length) ? navigate("/checkout-details") : _t.error("Please add items in the cart.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between flex-col py-4 lg:flex-row gap-4 items-start w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartSummary, { cart, handleNext })
  ] }) });
};
const CategoriesPage = () => {
  var _a;
  const { data: categories, isLoading } = useGetCategoriesQuery({});
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary-100 p-8 rounded-lg mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl uppercase font-bold text-primary-400", children: "ALL categories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-primary-400", children: "Find your favourite categories and products" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: (categories == null ? void 0 : categories.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4", children: (_a = categories == null ? void 0 : categories.doc) == null ? void 0 : _a.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryItem, { category: item }, index)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Categories not found!" }) })
  ] });
};
const Product = ({ product }) => {
  const [mainImage, setMainImage] = reactExports.useState(product == null ? void 0 : product.thumbnail);
  const [qty, setQty] = reactExports.useState(1);
  const productImages = product ? [...product.images, product == null ? void 0 : product.thumbnail] : [];
  const oldPrice = (product == null ? void 0 : product.price) + (product == null ? void 0 : product.discountAmount) || 0;
  const { cartItems } = useSelector((state) => state.cart);
  const isProductAddToCart = cartItems == null ? void 0 : cartItems.find(
    (item) => item._id === (product == null ? void 0 : product._id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartHandler = () => {
    if (qty >= product.minimumOrderQty) {
      dispatch(addToCart({ ...product, qty }));
      _t.success("Item added successfully");
    } else
      _t.error(
        `The min. order for this item is ${product.minimumOrderQty} piece. Adjust quantity to continue.`
      );
  };
  const buyNowHandler = () => {
    if (qty >= product.minimumOrderQty) {
      dispatch(addToCart({ ...product, qty }));
      navigate("/checkout-details");
      _t.success("Item added successfully");
    } else
      _t.error(
        `The min. order for this item is ${product.minimumOrderQty} piece. Adjust quantity to continue.`
      );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col w-full p-4 bg-white rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row h-[50%] gap-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-1/2 w-full ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[60vh] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: `${mainImage}` || keys.DEFAULT_IMG,
          alt: "Main product image",
          loading: "lazy",
          className: "w-full object-cover p-2 transition-transform duration-300 ease-out"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-4 ", children: productImages == null ? void 0 : productImages.map((src, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: `${src}` || keys.DEFAULT_IMG,
          alt: `Thumbnail ${index + 1}`,
          className: "w-16 h-16 md:w-20 md:h-20 object-cover mr-2 border border-gray-100 rounded-md shadow-sm cursor-pointer",
          onClick: () => setMainImage(src),
          loading: "lazy"
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:w-1/2 flex-grow justify-around flex flex-col gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg md:text-xl", children: product.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-gray-600 ", children: (product == null ? void 0 : product.rating) || 0 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Rating,
          {
            name: "half-rating-read",
            defaultValue: 0,
            value: product == null ? void 0 : product.rating,
            precision: 0.5,
            readOnly: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-2 border-l-2 px-2 items-center mx-2 text-xs md:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "border-r-2 pr-2", children: [
            (product == null ? void 0 : product.numOfReviews) || 0,
            " Reviews"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "px-2", children: [
            product.totalOrders || 0,
            " Orders"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold text-primary-400", children: [
          "Rs.",
          product.price.toFixed(2)
        ] }),
        oldPrice > product.price && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold line-through text-gray-500", children: [
          "Rs.",
          oldPrice.toFixed(2)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: product.stock > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-gray-800 font-bold", children: "Quantity:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Quantity,
            {
              qty,
              setQty,
              product
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mx-2 px-1 text-sm", children: [
            product.stock,
            " pieces left"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 text-sm", children: [
          "(Minimum Order Qrty:",
          " ",
          product.minimumOrderQty,
          ")"
        ] })
      ] }) : null }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-gray-800 font-bold", children: "Total Price:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold text-primary-400 transition-all duration-100 ease-in", children: [
          "Rs.",
          (product.price * qty).toFixed(2)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 px-1 text-xs", children: "(Tax : incl.)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: buyNowHandler,
            className: "btn bg-orange-500 hover:bg-orange-600 focus: text-white px-10",
            children: "Buy now"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: addToCartHandler,
            className: "btn primary-btn px-10",
            children: isProductAddToCart ? "Update Cart" : "Add to cart"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WishListIcon, { productId: product._id })
      ] })
    ] })
  ] }) });
};
let reviews = [];
const calculateRatingPercentage = (rating, totalReviews) => {
  var _a;
  if (totalReviews === 0) return 0;
  const ratingCount = (_a = reviews.filter(
    (review) => Math.round(review.rating) === rating
  )) == null ? void 0 : _a.length;
  return ratingCount / totalReviews * 100;
};
const ProductReviews = ({ product }) => {
  var _a;
  reviews = (product == null ? void 0 : product.reviews) || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mx-auto p-4 bg-white rounded-md shadow-gray-50 shadow-md mb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: product.rating || 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Rating,
        {
          name: "half-rating-read",
          defaultValue: 0,
          value: product == null ? void 0 : product.rating,
          precision: 0.5,
          readOnly: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600", children: [
        product.numOfReviews || 0,
        " Ratings"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 px-8", children: (_a = ["Excellent", "Good", "Average", "Below Average", "Poor"]) == null ? void 0 : _a.map(
      (label, index) => {
        const rating = 5 - index;
        const percentage = product.numOfReviews > 0 ? calculateRatingPercentage(
          rating,
          product.numOfReviews
        ) : 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between gap-4 mb-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-36", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-gray-200 h-1 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "bg-primary-300 h-full",
                  style: { width: `${percentage}%` }
                }
              ) })
            ]
          },
          index
        );
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-4 text-center bg-gray-100 py-2 px-4", children: "Product Review" }),
      reviews && reviews.length ? reviews.map((review) => {
        var _a2, _b;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex justify-between items-start mb-4 py-2 border-b",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: ((_a2 = review == null ? void 0 : review.customer) == null ? void 0 : _a2.image) ? `${keys.BUCKET_URL}${(_b = review == null ? void 0 : review.customer) == null ? void 0 : _b.image}` : "https://shorturl.at/KREMs",
                    alt: `${review.customer.firstName} avatar`,
                    className: "w-10 h-10 object-contain rounded-full"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: `${review.customer.firstName} ${review.customer.lastName}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Rating,
                    {
                      name: "half-rating-read",
                      defaultValue: 0,
                      value: product == null ? void 0 : product.rating,
                      precision: 0.5,
                      readOnly: true
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: review.review }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm", children: timeAgo(review.updatedAt) })
            ]
          },
          review._id
        );
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-center p-4", children: "No product reviews have been added yet." })
    ] })
  ] });
};
const VanderCard = ({ vendorId, totalProducts }) => {
  const { data: vendor, isLoading } = useGetVendorDetailsQuery(vendorId, {
    skip: !vendorId
  });
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : vendor ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-white p-4 rounded shadow flex flex-col gap-2",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: `/shop-view/${vendor._id}`,
            className: "flex items-center space-x-2 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: `http://localhost:3000/${vendor.logo}`,
                  alt: "Vendor Logo",
                  className: "w-16 h-16 rounded-full object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: vendor.shopName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600 text-sm group-hover:text-primary-400", children: vendor.address })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex text-gray-600 mx-auto justify-center items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 justify-center items-center pr-4 border-r border-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FaStar, { className: "text-yellow-800 text-lg" }),
            " ",
            vendor.reviews || 0,
            " ",
            "Reviews"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 justify-center items-center pl-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FaBoxOpen, { className: "text-green-800 text-lg" }),
            " ",
            totalProducts || 0,
            " Products"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-primary-400 text-white px-4 py-2 rounded mt-4 w-full flex justify-center items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaComment, { className: "mr-2" }),
          " Chat With Vendor"
        ] })
      ]
    },
    vendor._id
  ) : null;
};
VanderCard.propTypes = {
  vendor: PropTypes.object
};
const MoreStoreProducts = ({ vendorId, products }) => {
  var _a;
  return products && (products == null ? void 0 : products.doc) && products.doc.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 w-full bg-white rounded-lg shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-4", children: "More From The Store" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 w-full md:w-fit justify-center items-center", children: [
      (_a = products == null ? void 0 : products.doc) == null ? void 0 : _a.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FlatCard, { ...product }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: `/shop-view/${vendorId}`,
          className: "text-center p-4 text-primary-400 hover:underline",
          children: "View more"
        }
      )
    ] })
  ] }) : null;
};
const FeatureCard = ({ features: features2 }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-6 rounded shadow space-y-2 flex flex-col gap-2 mr-18", children: features2.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center space-x-4 text-gray-600 ",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(feature.Icon, { className: "text-inherit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: feature.text })
      ]
    },
    index
  )) });
};
FeatureCard.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.elementType.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};
const features = [
  { Icon: FaShippingFast, text: "Fast Delivery all across the country" },
  { Icon: FaLock, text: "Safe Payment" },
  { Icon: FaUndoAlt, text: "7 Days Return Policy" },
  { Icon: FaCertificate, text: "100% Authentic Products" }
];
const VendorRightBar = ({ vendorId }) => {
  var _a;
  const { data: vendorProducts, isLoading } = useGetProductsQuery(
    {
      userId: vendorId,
      limit: 4
    },
    { skip: !vendorId }
  );
  console.log(vendorProducts);
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { features }),
    vendorProducts && vendorProducts.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        VanderCard,
        {
          vendorId,
          totalProducts: (_a = vendorProducts == null ? void 0 : vendorProducts.doc) == null ? void 0 : _a.results
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MoreStoreProducts,
        {
          vendorId,
          products: vendorProducts
        }
      )
    ] }) : null
  ] });
};
const Overview = () => {
  const product = {
    description: "This is a demo Product Description:",
    details: [
      {
        question: "Who is this product for?",
        answer: "The target audience can be gender (i.e. male or female), an age group (i.e. college students or retirees), a lifestyle demographic (i.e. new mothers or car enthusiasts) or some other defined group of people."
      },
      {
        question: "What are the product’s basic details?",
        answer: "This includes attributes such as dimensions, materials, product features, cost and functions."
      },
      {
        question: "When should someone use the product?",
        answer: "Is it meant to be used during a certain time of day, seasonally or for a specific type of occasion? Just as important is pointing out if a product can or should be used every day or year-round. These details will help speak to the product’s long-term value."
      },
      {
        question: "Where should someone use the product?",
        answer: "Is it meant for indoor or outdoor use, for your car or your home?"
      },
      {
        question: "Why is this product useful or better than the competition?",
        answer: "This can be anything from quality to value to features. Think about the product benefits to your customers and consider how images can complement your product copy."
      },
      {
        question: "How does the product work?",
        answer: "This may not be necessary for every product, but it’s a must-have feature if you are selling anything with moving parts or electronics."
      }
    ]
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row max-w-7xl mx-auto my-8 p-4 border rounded-lg border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-center", children: "Overview" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: product.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside ml-4 mt-2", children: product.details.map((detail, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: detail.question }),
        " ",
        detail.answer
      ] }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "This is demo of product Details." })
    ] })
  ] }) });
};
const reviewSchema = objectType({
  rating: numberType().min(1, "Please give a rating").max(5, "Rating must be between 1 and 5"),
  comment: stringType().min(4, "Review must be at least 4 characters long")
});
const AddReview = ({ productId, refetch }) => {
  const methods = useForm({
    resolver: t(reviewSchema)
  });
  const [rating, setRating] = reactExports.useState(0);
  const [createReview, { isLoading }] = useCreateReviewMutation();
  const onSubmit = async (data) => {
    try {
      const finalData = {
        review: data.comment,
        rating,
        productId
      };
      await createReview(finalData).unwrap();
      refetch();
      n.success("Review submitted successfully!");
      methods.reset();
      setRating(0);
    } catch (error) {
      n.error(error.data.message || "Failed to submit review");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormProvider, { ...methods, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: methods.handleSubmit(onSubmit),
      className: "space-y-4 border rounded-lg p-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Rate this Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "rating",
              control: methods.control,
              rules: { required: "Rating is required" },
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Rating,
                {
                  name: "half-rating",
                  value: rating,
                  precision: 0.5,
                  onChange: (event, newValue) => {
                    setRating(newValue);
                    field.onChange(newValue);
                  },
                  onBlur: field.onBlur,
                  className: "mt-1"
                }
              )
            }
          ),
          methods.formState.errors.rating && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: methods.formState.errors.rating.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Reviews" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              ...methods.register("comment", {
                required: "Comment is required"
              }),
              className: "input",
              rows: "4"
            }
          ),
          methods.formState.errors.comment && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: methods.formState.errors.comment.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            className: "py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-300 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            disabled: isLoading,
            children: isLoading ? "Submitting..." : "Submit Review"
          }
        ) })
      ]
    }
  ) });
};
AddReview.propTypes = {
  productId: PropTypes.string.isRequired,
  refetch: PropTypes.func.isRequired
};
const ProductDetailsPage = () => {
  var _a, _b;
  const { slug } = useParams();
  const {
    data: product,
    isLoading,
    refetch
  } = useGetProductBySlugQuery(slug, {
    skip: !slug
  });
  const { data: products, isLoading: isProductsLoading } = useGetProductsQuery(
    {
      category: (_a = product == null ? void 0 : product.category) == null ? void 0 : _a._id
    },
    { skip: !((_b = product == null ? void 0 : product.category) == null ? void 0 : _b._id) }
  );
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : product && product.doc ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex flex-col space-y-4 sm:space-y-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col lg:flex-row justify-between gap-4 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Product, { product: product == null ? void 0 : product.doc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col-reverse lg:flex-row w-full gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col w-full lg:w-3/4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Overview, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ProductReviews, { product: product == null ? void 0 : product.doc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AddReview,
            {
              productId: product == null ? void 0 : product.doc._id,
              refetch
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-1/4 mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VendorRightBar, { vendorId: product == null ? void 0 : product.userId }) })
      ] })
    ] }) }),
    isProductsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : products && products.doc ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "products-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mx-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center w-fit gap-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Similar Products" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "view-box", children: [
          "View All",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaAngleRight, { className: "text-lg" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ProductCarousel,
        {
          data: products == null ? void 0 : products.doc,
          component: ProductCard,
          largeDesktopLimit: 5,
          desktopLimit: 4
        }
      )
    ] }) : null
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Product details not found!" });
};
const menuItems = [
  { icon: FaUserCircle, label: "Profile Info", to: "/profile/profile-info" },
  { icon: FaShoppingBag, label: "My Order", to: "/profile/my-orders" },
  { icon: FaHeart, label: "Wish List", to: "/profile/wish-list" },
  // { icon: FaWallet, label: "My Wallet", to: "/profile/my-wallet" },
  // { icon: FaStar, label: "My Loyalty Point", to: "/profile/my-loyalty-point" },
  // { icon: FaInbox, label: 'Inbox', to: '/profile/inbox', chip: 14 },
  { icon: FaHome, label: "My Address", to: "/profile/my-address" },
  {
    icon: FaTicketAlt,
    label: "Support Ticket",
    to: "/profile/support-ticket"
  },
  // { icon: FaGift, label: "Refer & Earn", to: "/profile/refer-earn" },
  { icon: FaTag, label: "Coupons", to: "/profile/coupons" },
  { icon: FaShippingFast, label: "Track Order", to: "/profile/track-order" }
];
const ProfileLeftBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = reactExports.useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      react.IconButton,
      {
        variant: "text",
        size: "lg",
        onClick: openDrawer,
        className: "absolute rigth-0 top-0 md:hidden",
        children: isDrawerOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(FaTimes, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(BiCategory, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      react.Drawer,
      {
        open: isDrawerOpen,
        onClose: closeDrawer,
        className: "w-[60%] px-3",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.Card, { shadow: false, className: "h-[100vh] w-full p-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(react.List, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "", onClick: closeDrawer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTimes, { className: "h-4 w-4" }) }),
          menuItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              onClick: closeDrawer,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center py-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: item.label })
              ] })
            },
            index
          ))
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-1/4 h-[100vh] p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.Card, { shadow: false, className: "h-full w-full p-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.List, { children: menuItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.to, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center py-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: item.label })
    ] }) }, index)) }) }) })
  ] });
};
const ProfilePage = () => {
  var _a, _b;
  const { userInfo } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetCustomerDetailsQuery(
    (_a = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _a._id,
    {
      skip: !((_b = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _b._id)
    }
  );
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (!userInfo && !(userInfo == null ? void 0 : userInfo.user)) {
      navigate("/customer/auth/sign-in");
    }
  }, [navigate, userInfo]);
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : data && (data == null ? void 0 : data.doc) && userInfo ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 lg:p-8 md:p-6 p-4 w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileLeftBar, { user: data == null ? void 0 : data.doc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Customer details not found." });
};
const profileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
  image: z.any().optional()
});
const ProfileInfo = () => {
  var _a, _b, _c, _d, _e;
  const { userInfo } = useSelector((state) => state.auth);
  const { data: user, isLoading: customerLoading } = useGetCustomerDetailsQuery(userInfo.user._id, {
    skip: !((_a = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _a._id)
  });
  const [selectedImage, setSelectedImage] = reactExports.useState(null);
  const [updateCustomer, { isLoading: customerUpdating }] = useUpdateCustomerMutation();
  reactExports.useEffect(() => {
    var _a2, _b2;
    if (userInfo && (user == null ? void 0 : user.doc) && ((_a2 = user == null ? void 0 : user.doc) == null ? void 0 : _a2.image)) {
      setSelectedImage(`${keys.BUCKET_URL}${(_b2 = user == null ? void 0 : user.doc) == null ? void 0 : _b2.image}`);
    }
  }, [setSelectedImage, user, userInfo]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: t(profileSchema),
    defaultValues: {
      firstName: ((_b = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _b.firstName) || "",
      lastName: ((_c = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _c.lastName) || "",
      email: ((_d = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _d.email) || "",
      phoneNumber: ((_e = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _e.phoneNumber) || ""
    }
  });
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageURL = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(imageURL);
      setValue("image", e.target.files[0]);
    }
  };
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    var _a2;
    const formData = new FormData();
    formData.append("customerId", (_a2 = userInfo == null ? void 0 : userInfo.user) == null ? void 0 : _a2._id);
    formData.append("firstName", formData.firstName);
    formData.append("lastName", formData.lastName);
    formData.append("email", formData.email);
    formData.append("phoneNumber", formData.phoneNumber);
    formData.append("image", formData.image);
    try {
      await updateCustomer(formData).unwrap();
      _t.success("Customer Update successfully");
      navigate("/profile/profile-info");
    } catch (error) {
      _t.error(error.data.message);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 xl:w-full xl:mx-auto bg-white rounded-lg shadow-sm shadow-primary-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Profile Info" }),
    customerLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : user && (user == null ? void 0 : user.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-4", onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        selectedImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: selectedImage,
            alt: "Uploaded",
            className: "w-36 h-36 object-cover rounded-full border border-gray-300"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(FaUserCircle, { className: "text-9xl text-primary-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 right-0 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              id: "imageUpload",
              hidden: true,
              ...register("image"),
              onChange: handleImageChange,
              accept: "image/*"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "imageUpload",
              className: "cursor-pointer",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaCamera, { className: "w-6 h-6 text-primary-400" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "First Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: `input ${errors.firstName ? "input-error" : ""}`,
              ...register("firstName")
            }
          ),
          errors.firstName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500", children: errors.firstName.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Last Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: `input ${errors.lastName ? "input-error" : ""}`,
              ...register("lastName")
            }
          ),
          errors.lastName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500", children: errors.lastName.message })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Phone Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: `input ${errors.phoneNumber ? "input-error" : ""}`,
            ...register("phoneNumber")
          }
        ),
        errors.phoneNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500", children: errors.phoneNumber.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "input-label", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            className: `input ${errors.email ? "input-error" : ""}`,
            ...register("email")
          }
        ),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500", children: errors.email.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn primary-btn", children: customerUpdating ? "is Updating..." : "Update" }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "User details not found!" })
  ] });
};
const img$1 = "" + new URL("empty-cart-Du_WYkdH.webp", import.meta.url).href;
const MyOrders = () => {
  var _a;
  const { user } = useSelector((state) => state.auth.userInfo);
  const { data: orders, isLoading } = useGetMyOrdersQuery(user._id, {
    skip: !user._id
  });
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : orders ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg p-4 md:p-8 bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-sm md:text-lg lg:text-xl font-bold mb-4", children: "My Orders" }),
    (orders == null ? void 0 : orders.doc) && ((_a = orders == null ? void 0 : orders.doc) == null ? void 0 : _a.length) ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border border-gray-200 table-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider rounded-tl-lg", children: "Order Id" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider", children: "Order Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-center text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 rounded-tr-lg", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: orders.doc.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b border-gray-200 text-left sm:text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 md:px-4 py-2 bg-white text-xs md:text-sm border border-gray-200 rounded-l-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-900 whitespace-no-wrap text-xs md:text-sm", children: order._id }) }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 md:px-4 py-2 bg-white text-xs md:text-sm border border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-block font-semibold leading-tight text-xs md:text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: formatDate(order.createdAt) }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 md:px-4 py-2 bg-white text-xs md:text-sm border border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-block font-semibold text-green-900 leading-tight text-xs md:text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: order.orderStatus }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 md:px-4 py-2 bg-white text-xs md:text-sm border border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-900 whitespace-no-wrap text-xs md:text-sm", children: [
              "$",
              order.totalAmount ? order.totalAmount.toFixed(2) : "0.00"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 md:px-4 py-2 bg-white text-xs md:text-sm flex justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: `/profile/order-view/${order._id}`,
                className: "text-blue-600 hover:text-blue-900 border-none cursor-pointer",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(IoEyeSharp, {})
              }
            ) })
          ]
        },
        order._id
      )) })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No orders found!" })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No orders found!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img$1, alt: "" })
  ] });
};
const transactions$1 = [];
const MyloyaltyPoint = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg p-8 shadow-sm shadow-primary-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-center gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-400 w-full md:w-96 h-48 text-white p-5 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Total Loyalty Point" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold", children: "0" })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row h-auto md:h-48 items-stretch", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border p-5 rounded-lg shadow-lg h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2", children: "How To Use" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Convert your loyalty point to wallet money." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Minimum 200 Points required to convert into currency." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-green-300 p-2 rounded-md text-xs md:text-sm", children: "Convert to Currency" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-96 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: "Transaction History" }),
      transactions$1.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-center mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaInfoCircle, { className: "text-6xl text-gray-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mt-2", children: "You do not have any transactions yet" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: transactions$1.map((transaction, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "border-b py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: transaction }) }, index)) })
    ] })
  ] });
};
const AddressCard = ({ address, onEdit, onDelete }) => {
  return address ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 shadow rounded-md w-full sm:w-3/4 md:w-1/2 lg:w-full h-72 xl:w-full mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-md sm:text-lg mb-2", children: [
        address.type,
        " (",
        address.label,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end mt-2 space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onEdit, className: "text-blue-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaEdit, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onDelete, className: "text-red-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTrash, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Name" }),
      ": ",
      address.name
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Phone" }),
      ": ",
      address.phone
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "City" }),
      ": ",
      address.city
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Zip code" }),
      ": ",
      address.zip
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Address" }),
      ": ",
      address.address
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Country" }),
      ": ",
      address.country
    ] })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "No address found" }) });
};
AddressCard.propTypes = {
  address: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
const MyAddress = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const user = userInfo == null ? void 0 : userInfo.user;
  const { permanentAddress } = user || {};
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    phone: "",
    city: "",
    zip: "",
    address: "",
    country: ""
  });
  const [addresses, setAddresses] = reactExports.useState([permanentAddress]);
  const customerId = user._id;
  const handleClick = () => {
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      phone: "",
      city: "",
      zip: "",
      address: "",
      country: ""
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const [updateCustomer] = useUpdateCustomerMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customerId) {
      console.error("Customer ID not found");
      return;
    }
    try {
      const result = await updateCustomer({
        customerId,
        address: formData
      }).unwrap();
      console.log("Address updated:", result);
      _t.success("Address updated successfully!");
      const userFromStorage = JSON.parse(localStorage.getItem("user"));
      const updatedUser = {
        ...userFromStorage,
        permanentAddress: formData
        // Assuming you want to save it as 'permanentAddress'
      };
      localStorage.setItem("userInfo", JSON.stringify(updatedUser));
      const updatedAddresses = [...addresses, formData];
      setAddresses(updatedAddresses);
      handleClose();
    } catch (error) {
      console.error("Failed to update address:", error);
      _t.error("Failed to update address. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto rounded-lg p-8 shadow-sm shadow-primary-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "My Address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleClick,
          className: "bg-green-500 text-white py-2 px-4 rounded-md",
          children: "Add Address"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[50vh] flex flex-col items-center p-4", children: addresses.length > 0 ? addresses.map((address, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 w-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddressCard,
      {
        address,
        onEdit: () => console.log("Edit"),
        onDelete: () => console.log("Delete")
      }
    ) }, index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-gray-800 text-center text-lg", children: "No Address found!" }) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4", children: "Add Address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "flex flex-wrap",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 w-1/2 pr-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  name: "name",
                  value: formData.name,
                  onChange: handleChange,
                  required: true,
                  className: "border rounded w-full py-2 px-3"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 w-1/2 pl-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  name: "phone",
                  value: formData.phone,
                  onChange: handleChange,
                  required: true,
                  className: "border rounded w-full py-2 px-3"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 w-1/2 pr-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "City" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  name: "city",
                  value: formData.city,
                  onChange: handleChange,
                  required: true,
                  className: "border rounded w-full py-2 px-3"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 w-1/2 pl-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Zip Code" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  name: "zip",
                  value: formData.zip,
                  onChange: handleChange,
                  required: true,
                  className: "border rounded w-full py-2 px-3"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 w-1/2 pr-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  name: "address",
                  value: formData.address,
                  onChange: handleChange,
                  required: true,
                  className: "border rounded w-full py-2 px-3"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 w-1/2 pl-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Country" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  name: "country",
                  value: formData.country,
                  onChange: handleChange,
                  required: true,
                  className: "border rounded w-full py-2 px-3"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex justify-between mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  className: "bg-green-500 text-white py-2 px-4 rounded-md",
                  children: "Submit"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleClose,
                  className: "mt-2 bg-red-500 text-white py-2 px-4 rounded-md",
                  children: "Close"
                }
              )
            ] })
          ]
        }
      )
    ] }) })
  ] });
};
const walletOffers = [
  {
    title: "Flat Bonus",
    validity: "Valid till 22 Nov, 2030",
    description: "Add fund to wallet $500.00 and enjoy $150.00 bonus",
    extra: "Add minimum 500 and get flat 150 extra"
  },
  {
    title: "Add fund offer",
    validity: "Valid till 26 Dec, 2030",
    description: "Add fund to wallet $1000.00 and enjoy $300.00 bonus",
    extra: "Add more to save more"
  }
];
const transactions = [];
const MyWallet = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 shadow-sm shadow-primary-100 rounded-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-500 w-full md:w-80 text-white p-5 rounded-lg xl:h-52", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Wallet Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold", children: "$0.00" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaInfoCircle, { className: "text-xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 bg-white text-blue-500 px-4 py-2 rounded-full flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaPlusCircle, { className: "mr-2" }),
          " Add Fund"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row items-stretch mt-5 md:mt-0", children: walletOffers.map((offer, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 md:ml-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border p-5 rounded-lg h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2", children: offer.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: offer.validity }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2", children: offer.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-500 font-semibold mt-2", children: offer.extra })
      ] }) }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-auto md:h-96 mt-5 md:mt-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: "Transaction History" }),
      transactions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-center mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaInfoCircle, { className: "text-6xl text-gray-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mt-2", children: "You do not have any transactions yet" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: transactions.map((transaction, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "border-b py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: transaction }) }, index)) })
    ] })
  ] });
};
const ReferEarn = () => {
  const referralCode = "QE0S46WX0PXTUARPYMTL";
  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    alert("Referral code copied to clipboard!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " bg-white p-8 shadow-sm shadow-primary-100 rounded-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold mb-4", children: "Refer & Earn" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "src/assets/refer-and-earn.png",
        alt: "Refer & Earn",
        className: "w-96"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-center text-green-400 mb-2", children: "Invite Your Friends & Businesses" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center mb-6", children: "Copy your code and share with your friends" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "", className: "ml-5 text-xs", children: "Your personal code" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: referralCode,
          readOnly: true,
          className: "w-[90%] border border-gray-300 p-2 rounded-l-md focus:outline-none"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleCopy,
          className: "bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiOutlineCopy, { size: 24 })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center mb-4", children: "OR SHARE" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center space-x-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-green-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiOutlineWhatsApp, { size: 32 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-red-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiOutlineMail, { size: 32 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-blue-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiOutlineShareAlt, { size: 32 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-8 rounded-md border border-blue-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "How it works?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-decimal list-inside space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Invite your friends & businesses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "They register E-Commerce Baaazaar with special offer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "You make your earnings" })
      ] })
    ] })
  ] });
};
const TicketList = ({ id, topic, date, type, status, onView, onDelete }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 border-b", children: topic }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 border-b", children: date }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 border-b", children: type }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 border-b  ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 w-16 text-red-500 rounded-full", children: status }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 border-b flex space-x-2 Items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-blue-500", onClick: () => onView(id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiFillEye, { size: 24 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-red-500", onClick: () => onDelete(id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiFillDelete, { size: 24 }) })
    ] })
  ] });
};
TicketList.propTypes = {
  id: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onView: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
const SupportTicket = () => {
  const [tickets, setTickets] = reactExports.useState([
    {
      id: 1,
      topic: "ticket 2",
      date: "2024-07-19 05:39 PM",
      type: "Complaint",
      status: "Open"
    },
    {
      id: 2,
      topic: "ticket 1",
      date: "2024-07-19 05:38 PM",
      type: "Partner request",
      status: "Open"
    },
    {
      id: 3,
      topic: "ticket 3",
      date: "2024-07-19 05:40 PM",
      type: "Complaint",
      status: "Close"
    },
    {
      id: 4,
      topic: "ticket 4",
      date: "2024-07-19 05:41 PM",
      type: "Complaint",
      status: "Open"
    },
    {
      id: 5,
      topic: "ticket 5",
      date: "2024-07-19 05:42 PM",
      type: "Complaint",
      status: "Open"
    },
    {
      id: 6,
      topic: "ticket 6",
      date: "2024-07-19 05:43 PM",
      type: "Complaint",
      status: "Close"
    },
    {
      id: 7,
      topic: "ticket 7",
      date: "2024-07-19 05:44 PM",
      type: "Complaint",
      status: "Open"
    },
    {
      id: 8,
      topic: "ticket 8",
      date: "2024-07-19 05:45 PM",
      type: "Complaint",
      status: "Open"
    },
    {
      id: 9,
      topic: "ticket 9",
      date: "2024-07-19 05:46 PM",
      type: "Complaint",
      status: "Close"
    },
    {
      id: 10,
      topic: "ticket 10",
      date: "2024-07-19 05:47 PM",
      type: "Complaint",
      status: "Open"
    }
  ]);
  const handleView = (id) => {
  };
  const handleDelete = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full border mx-auto rounded-lg p-8 shadow-sm shadow-primary-100 sm:p-2 md:p-4 lg:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold sm:text-lg md:text-xl lg:text-2xl", children: "Support Ticket" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn primary-btn", children: "Add New Ticket" })
    ] }),
    tickets ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 border-b sm:hidden md:table-cell", children: "Topic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 border-b", children: "Submission Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 border-b sm:hidden lg:table-cell", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 border-b", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 border-b", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: tickets.map((ticket) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TicketList,
        {
          id: ticket.id,
          topic: ticket.topic,
          date: ticket.date,
          type: ticket.type,
          status: ticket.status,
          onView: handleView,
          onDelete: handleDelete
        },
        ticket.id
      )) })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "No Ticket found!" })
  ] });
};
const TrackOrderImg = "" + new URL("track-order-Rx-yF7Io.jpg", import.meta.url).href;
const TrackOrder = () => {
  const [orderId, setOrderId] = reactExports.useState("");
  const [phoneNumber, setPhoneNumber] = reactExports.useState("");
  const handleTrackOrder = () => {
  };
  const handleClear = () => {
    setOrderId("");
    setPhoneNumber("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:w-full mx-auto p-8 h-[100%] bg-white shadow-sm shadow-primary-100 items-center rounded-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: handleClear,
        className: "flex items-center text-gray-600 hover:text-gray-800",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaSyncAlt, { className: "mr-1" }),
          " Clear"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-center mb-6", children: "Track Order" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center items-center mb-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: orderId,
          onChange: (e) => setOrderId(e.target.value),
          placeholder: "Order ID",
          className: "border border-gray-400 rounded-md px-4 py-2 w-1/3 focus:outline-none"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: phoneNumber,
          onChange: (e) => setPhoneNumber(e.target.value),
          placeholder: "Your phone number",
          className: "border border-gray-400 rounded-md px-4 py-2 w-1/3 focus:outline-none"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleTrackOrder,
          className: "bg-primary-500 text-white px-8 py-2 rounded ml-2 hover:bg-blue-700",
          children: "Track Order"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col w-1/2 mx-auto items-center mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: TrackOrderImg,
          alt: "Truck",
          className: "mb-2 object-contain"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Enter your order ID & phone number to get delivery updates" })
    ] })
  ] });
};
TrackOrder.propTypes = {
  orderId: PropTypes.string,
  phoneNumber: PropTypes.string
};
const CouponCard = ({ icon, discount, on, code, validUntil, minPurchase }) => {
  const [isCopied, setIsCopied] = reactExports.useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3e3);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg shadow h-auto sm:h-44 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[30%] flex flex-col items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: discount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "on" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `/your-path/${on}`,
            className: "text-blue-600 hover:text-blue-800",
            children: on
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[70%] text-right sm:text-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleCopy,
          className: "text-sx  font-bold p-10 mb-4",
          style: {
            width: "200px",
            border: "2px dashed green",
            padding: "4px",
            borderRadius: "8px"
          },
          children: isCopied ? "Copied" : code
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sx font-bold", children: [
        " ",
        validUntil
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sx font-bold", children: [
        "$",
        minPurchase
      ] })
    ] })
  ] });
};
CouponCard.propTypes = {
  icon: PropTypes.element.isRequired,
  discount: PropTypes.string.isRequired,
  on: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  validUntil: PropTypes.string.isRequired,
  minPurchase: PropTypes.number.isRequired
};
const couponsData = [
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaFire, { style: { color: "red", fontSize: "30px" } }), discount: "10%", on: "6valley CMS", code: "rtzxx8n8lr", validUntil: "10 Jun, 2025", minPurchase: 100 },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTruck, { style: { color: "blue", fontSize: "30px" } }), discount: "Free Delivery", on: "Mart Morning", code: "pcuw655ytg", validUntil: "31 Dec, 2027", minPurchase: 10 },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaDollarSign, { style: { color: "green", fontSize: "30px" } }), discount: "$100.00", on: "6valley CMS", code: "ogpuqyeeoe", validUntil: "06 Oct, 2028", minPurchase: 200 },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaDollarSign, { style: { color: "darkgreen", fontSize: "30px" } }), discount: "$50.00", on: "Mart Morning", code: "2ul59rvkw2", validUntil: "31 Dec, 2026", minPurchase: 500 },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaDollarSign, { style: { color: "lightgreen", fontSize: "30px" } }), discount: "$10.00", on: "All Shops", code: "856gmef66p", validUntil: "10 Jun, 2026", minPurchase: 100 },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTruck, { style: { color: "darkblue", fontSize: "30px" } }), discount: "Free Delivery", on: "Mart Morning", code: "l2oDTjKF3z", validUntil: "31 Jan, 2029", minPurchase: 2e3 },
  { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FaFire, { style: { color: "orange", fontSize: "30px" } }), discount: "75%", on: "Mart Morning", code: "rFhfx7XiCm", validUntil: "31 Jan, 2029", minPurchase: 7e3 }
];
const Coupons = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mx-auto ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-center mb-6", children: "Coupons" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6", children: couponsData.map((coupon, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      CouponCard,
      {
        icon: coupon.icon,
        discount: coupon.discount,
        on: coupon.on,
        code: coupon.code,
        validUntil: coupon.validUntil,
        minPurchase: coupon.minPurchase
      },
      index
    )) })
  ] });
};
const WishItem = ({ product, customer, refetch }) => {
  var _a;
  const oldPrice = (product == null ? void 0 : product.price) + (product == null ? void 0 : product.discount) || 0;
  const [deleteWishlistProduct] = useDeleteWishlistProductMutation();
  const removeItem = async (productId) => {
    try {
      const data = {
        customer,
        productId
      };
      await deleteWishlistProduct(data);
      refetch();
    } catch (error) {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-white border border-primary-100 rounded-lg overflow-hidden flex justify-between items-center mx-2 px-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex gap-2 rounded-lg overflow-hidden group cursor-pointer z-10", children: [
      product.discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "discount-badge", children: [
        "-$",
        (_a = product.discount) == null ? void 0 : _a.toFixed(2)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/products/${product._id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: `http://localhost:3000/${product.thumbnail}`,
          alt: product.name,
          className: "product__img h-32"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 w-44", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/products/${product._id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium truncate mb-2 group:hover:text-primary-400", children: product.name }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          oldPrice > product.price && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm line-through text-gray-500", children: [
            "$",
            oldPrice.toFixed(2)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold", children: [
            "$",
            product.price.toFixed(2)
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FaHeart,
      {
        className: "mr-2 w-6 h-6 text-primary-400 hover:text-primary-500 transition-all duration-100 ease-in",
        onClick: () => removeItem(product._id)
      }
    ) })
  ] }) });
};
const img = "" + new URL("empty_wishlist-BKFu4SGl.png", import.meta.url).href;
const WishList = ({ customer, refetch }) => {
  const wishlist = [
    {
      product: {
        _id: "1",
        name: "Product 1",
        price: 100,
        discount: 10,
        thumbnail: "https://tmart-8.myshopify.com/cdn/shop/products/04_cd10a204-6265-416d-a026-5f9ef75f611d_grande.jpg?v=1517554070"
      }
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-primary-100 rounded-lg min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto bg-white rounded-lg  p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold mb-5", children: "My Wishlist" }),
    wishlist.length > 0 ? wishlist.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      WishItem,
      {
        product: item.product,
        customer,
        refetch
      },
      item.product._id
    )) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: "empty_wishlist" }) })
  ] }) });
};
const vendorChats = [
  { name: "Vendor 1", lastMessage: "Hello", details: "Details of Vendor 1" },
  { name: "Vendor 2", lastMessage: "Hi", details: "Details of Vendor 2" }
];
const deliveryBoyChats = [
  {
    name: "Delivery Boy 1",
    lastMessage: "On my way",
    details: "Details of Delivery Boy 1"
  },
  {
    name: "Delivery Boy 2",
    lastMessage: "Delivered",
    details: "Details of Delivery Boy 2"
  }
];
const Inbox = () => {
  const [selectedChatType, setSelectedChatType] = reactExports.useState("vendor");
  const [selectedChat, setSelectedChat] = reactExports.useState(null);
  const chats = selectedChatType === "vendor" ? vendorChats : deliveryBoyChats;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white text-sm md:text-base h-screen mx-auto shadow-sm shadow-primary-100 rounded-lg flex flex-col md:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-1/3 w-full bg-primary-100 p-4 rounded-l-lg md:rounded-r-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-around mb-5 border-b", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `px-4 py-2 ${selectedChatType === "vendor" ? "font-bold" : "text-black"}`,
            onClick: () => {
              setSelectedChatType("vendor");
              setSelectedChat(null);
            },
            children: "Vendor"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `px-4 py-2 ${selectedChatType === "deliveryBoy" ? "font-bold" : "text-black"}`,
            onClick: () => {
              setSelectedChatType("deliveryBoy");
              setSelectedChat(null);
            },
            children: "Delivery Boy"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: chats.map((chat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border-b py-2 cursor-pointer ",
          onClick: () => setSelectedChat(chat),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: chat.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: chat.lastMessage })
          ]
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-2/3 w-full md:ml-5 mt-5 md:mt-0  rounded-l-none p-4", children: selectedChat ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3", children: selectedChat.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: selectedChat.details })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "r text-gray-600 text-center", children: "Select a chat to see details" }) })
  ] });
};
const FlashDealBanner = "" + new URL("flash-deals-C3mSaKiz.jpg", import.meta.url).href;
const FlashDealsPage = () => {
  var _a;
  const { data: deal, isLoading: flashDealsLoading } = useGetFlashDealsQuery(
    {}
  );
  const endDate = (deal == null ? void 0 : deal.endDate) || new Date((/* @__PURE__ */ new Date()).getTime() + 30 * 24 * 60 * 60 * 1e3);
  const banner = (deal == null ? void 0 : deal.image) ? `http://localhost:3000/${deal == null ? void 0 : deal.image}` : FlashDealBanner;
  const navigate = useNavigate();
  if (!deal) {
    return navigate("/");
  }
  return flashDealsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : deal && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-60 mt-4 p-4 rounded-lg shadow-lg w-full mx-auto py-4 bg-pink-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: banner,
          alt: "flash deals banner",
          className: "absolute inset-0 w-full h-full object-cover rounded-lg"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlashDealTimer, { endDate }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "lg:text-2xl md:text-xl text-lg font-bold text-primary-400", children: "FLASH DEAL" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-400", children: "Hurry Up! The offer is limited. Grab while it lasts" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4", children: (_a = deal == null ? void 0 : deal.productId) == null ? void 0 : _a.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { ...product }, index)) }) })
  ] });
};
const OrderConfirmationPage = () => {
  const { orderId } = useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto p-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaCheckCircle, { className: "text-green-500 text-5xl" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-2", children: "Order Placed Successfully!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-6", children: [
      "Your payment has been successfully processed and your order -",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: orderId }),
      " has been placed."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/profile/my-orders", className: "btn primary-btn", children: "Track Order" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex gap-2 text-primary-600 hover:underline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaArrowLeft, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " Continue Shopping" })
      ] })
    ] })
  ] });
};
const NotFoundImage = "" + new URL("404-not-found-DomZxbLe.jpg", import.meta.url).href;
const NotFoundPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center items-center w-full h-screen bg-white p-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: NotFoundImage,
        alt: "Not Found",
        loading: "lazy",
        className: "w-full max-w-md h-auto mb-6 object-contain"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-extrabold text-gray-800 mb-2", children: "404 - Page Not Found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 mb-6", children: "Sorry, the page you are looking for does not exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: "flex justify-center items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded shadow-md hover:bg-primary-600 transition duration-300",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaArrowLeft, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Go To Home" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-12 text-sm text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Vista Mart. All Rights Reserved."
    ] }) })
  ] });
};
const schema$1 = z.object({
  email: z.string().email("Invalid email address")
});
const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: t(schema$1)
  });
  const [successMessage, setSuccessMessage] = reactExports.useState("");
  const onSubmit = (data) => {
    setSuccessMessage(
      "Please check your email inbox for a link to complete the reset."
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto mt-16 p-8  rounded-md shadow-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Reset your password" }),
    successMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-6",
        role: "alert",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaCheckCircle, { className: "mr-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: successMessage })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "email",
            className: "block text-sm font-medium",
            children: "Email Address"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "email",
            type: "email",
            ...register("email", { required: true }),
            className: `input mt-1 block w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md`,
            placeholder: "Enter your email"
          }
        ),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.email.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "w-full py-2 px-4 rounded-md bg-primary-500 hover:text-gray-100 hover:bg-primary-400 text-white mt-6",
          children: "Reset Password"
        }
      )
    ] })
  ] });
};
const schema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters")
});
const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: t(schema)
  });
  const [error, setError] = reactExports.useState("");
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto mt-16 p-8 shadow-md rounded-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Reset Password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm font-medium",
            children: "New Password"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "password",
            type: "password",
            ...register("password", { required: true }),
            className: `input mt-1 block w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md`,
            placeholder: "Enter new password"
          }
        ),
        errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.password.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "confirmPassword",
            className: "block text-sm font-medium",
            children: "Confirm Password"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "confirmPassword",
            type: "password",
            ...register("confirmPassword", { required: true }),
            className: `input mt-1 block w-full px-3 py-2 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-md`,
            placeholder: "Confirm new password"
          }
        ),
        errors.confirmPassword && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.confirmPassword.message })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "w-full py-2 px-4 rounded-md  bg-primary-500 hover:text-gray-100 hover:bg-primary-400 text-white mt-6",
          children: "Reset Password"
        }
      )
    ] })
  ] });
};
const RefundPolicy = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-bold text-2xl mb-6", children: "Refund Policy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 p-4 rounded-md shadow-md mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow-md p-6 rounded-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "This is demo Refund policy." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: 'These terms of use (the "Terms of Use") govern your use of our website 6valley.6amtech.com (the "Website") and our "6valley" application for mobile and handheld devices (the "App"). The Website and the App are jointly referred to as the "Platform". Please read these Terms of Use carefully before you use the services. If you do not agree to these Terms of Use, you may not use the services on the Platform, and we request you to uninstall the App. By installing, downloading, and/or even merely using the Platform, you shall be contracting with 6valley and you provide your acceptance to the Terms of Use and other 6valley policies (including but not limited to the Cancellation & Refund Policy, Privacy Policy, etc.) as posted on the Platform from time to time, which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same. The Platforms will be used by (i) natural persons who have reached 18 years of age and (ii) corporate legal entities, e.g., companies. Where applicable, these Terms shall be subject to country-specific provisions as set out herein.' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "USE OF PLATFORM AND SERVICES" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "All commercial/contractual terms are offered by and agreed to between Buyers and Merchants alone. The commercial/contractual terms include, without limitation, price, taxes, shipping costs, payment methods, payment terms, date, period and mode of delivery, warranties related to products and services and after-sales services related to products and services. 6valley does not have any kind of control or does not determine or advise or in any way involve itself in the offering or acceptance of such commercial/contractual terms between the Buyers and Merchants. 6valley may, however, offer support services to Merchants in respect to order fulfillment, payment collection, call center, and other services, pursuant to independent contracts executed by it with the Merchants. 6valley is not responsible for any non-performance or breach of any contract entered into between Buyers and Merchants on the Platform. 6valley cannot and does not guarantee that the concerned Buyers and/or Merchants shall perform any transaction concluded on the Platform. 6valley is not responsible for unsatisfactory services or non-performance of services or damages or delays as a result of products that are out of stock, unavailable or back-ordered." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "6valley is operating an e-commerce platform and assumes and operates the role of facilitator, and does not at any point in time during any transaction between Buyer and Merchant on the Platform come into or take possession of any of the products or services offered by Merchant. At no time shall 6valley hold any right, title, or interest over the products nor shall 6valley have any obligations or liabilities in respect of such a contract entered into between Buyer and Merchant. You agree and acknowledge that we shall not be responsible for:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The goods provided by the shops or restaurants including, but not limited, serving of food orders suiting your requirements and needs;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The Merchant's goods not being up to your expectations or leading to any loss, harm, or damage to you;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The availability or unavailability of certain items on the menu;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The Merchant serving the incorrect orders." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "The details of the products and price lists available on the Platform are based on the information provided by the Merchants and we shall not be responsible for any change or cancellation or unavailability. All products & product images used on our platforms are only representative and shall/might not match with the actual menu/products ordered; 6valley shall not be responsible or liable for any discrepancies or variations on this aspect." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "Personal Information that you provide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "If you want to use our service, you must create an account on our Site. To establish your account, we will ask for personally identifiable information that can be used to contact or identify you, which may include your name, phone number, and e-mail address. We may also collect demographic information about you, such as your zip code, and allow you to submit additional information that will be part of your profile. Other than basic information that we need to establish your account, it will be up to you to decide how much information to share as part of your profile. We encourage you to think carefully about the information that you share and we recommend that you guard your identity and your sensitive information. Of course, you can review and revise your profile at any time." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "You understand that delivery periods quoted to you at the time of confirming the order is an approximate estimate and may vary. We shall not be responsible for any delay in the delivery of your order due to the delay at seller/merchant end for order processing or any other unavoidable circumstances." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "Your order shall be only delivered to the address designated by you at the time of placing the order on the Platform. We reserve the right to cancel the order, in our sole discretion, in the event of any change to the place of delivery and you shall not be entitled to any refund for the same. Delivery in the event of change of the delivery location shall be at our sole discretion and we reserve the right to charge an additional delivery fee if required." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "ACTIVITIES PROHIBITED ON THE PLATFORM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "The following is a partial list of the kinds of conduct that are illegal or prohibited on the Websites. 6valley reserves the right to investigate and take appropriate legal action/s against anyone who, in 6valley sole discretion, engages in any of the prohibited activities. Prohibited activities include — but are not limited to — the following:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Using the Websites for any purpose in violation of laws or regulations;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting Content that infringes the intellectual property rights, privacy rights, publicity rights, trade secret rights, or any other rights of any party;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting Content that is unlawful, obscene, defamatory, threatening, harassing, abusive, slanderous, hateful, or embarrassing to any other person or entity as determined by 6valley in its sole discretion or pursuant to local community standards;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting Content that constitutes cyber-bullying, as determined by 6valley in its sole discretion;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting Content that depicts any dangerous, life-threatening, or otherwise risky behavior;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting telephone numbers, street addresses, or last names of any person;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting URLs to external websites or any form of HTML or programming code;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Posting anything that may be "spam," as determined by 6valley in its sole discretion;' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Impersonating another person when posting Content;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Harvesting or otherwise collecting information about others, including email addresses, without their consent;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Allowing any other person or entity to use your identification for posting or viewing comments;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Harassing, threatening, stalking, or abusing any person;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Engaging in any other conduct that restricts or inhibits any other person from using or enjoying the Websites, or which, in the sole discretion of 6valley, exposes eFood or any of its customers, suppliers, or any other parties to any liability or detriment of any type;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Encouraging other people to engage in any prohibited activities as described herein." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "6valley reserves the right — but is not obligated — to do any or all of the following:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Investigate an allegation that any Content posted on the Websites does not conform to these Terms and determine in its sole discretion to remove or request the removal of the Content;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Remove Content which is abusive, illegal, or disruptive, or that otherwise fails to conform with these Terms;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Terminate a user's access to the Websites upon any breach of these Terms;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Monitor, edit, or disclose any Content on the Websites; and" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Edit or delete any Content posted on the Websites, regardless of whether such Content violates these standards." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "AMENDMENTS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "6valley reserves the right to change or modify these Terms (including our policies which are incorporated into these Terms) at any time by posting changes on the Platform. You are strongly recommended to read these Terms regularly. You will be deemed to have agreed to the amended Terms by your continued use of the Platforms following the date on which the amended Terms are posted." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "PAYMENT" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-justify mb-6", children: [
        " ",
        "We hope you find this information helpful. If you have any questions about our refund policy or anything else, please feel free to contact us.6valley reserves the right to offer additional payment methods and/or remove existing payment methods at any time at its sole discretion. If you choose to pay using an online payment method, the payment shall be processed by our third-party payment service provider(s). With your consent, your credit card/payment information will be stored with our third-party payment service provider(s) for future orders. 6valley does not store your credit card or payment information. You must ensure that you have sufficient funds on your credit and debit card to fulfill the payment of an Order. Insofar as required, 6valley takes responsibility for payments made on our Platforms including refunds, chargebacks, cancellations and dispute resolution, provided if reasonable and justifiable and in accordance with these Terms."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "CANCELLATION" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "6valley can cancel any order anytime due to the foods/products unavailability, out of coverage area and any other unavoidable circumstances." })
    ] }) })
  ] });
};
const ReturnPolicy = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-bold text-2xl mb-6", children: "Return Policy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 p-4 rounded-md shadow-md mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow-md p-6 rounded-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "This is demo Return policy." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: 'These terms of use (the "Terms of Use") govern your use of our website 6valley.6amtech.com (the "Website") and our "6valley" application for mobile and handheld devices (the "App"). The Website and the App are jointly referred to as the "Platform". Please read these Terms of Use carefully before you use the services. If you do not agree to these Terms of Use, you may not use the services on the Platform, and we request you to uninstall the App. By installing, downloading, and/or even merely using the Platform, you shall be contracting with 6valley and you provide your acceptance to the Terms of Use and other 6valley policies (including but not limited to the Cancellation & Refund Policy, Privacy Policy, etc.) as posted on the Platform from time to time, which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same. The Platforms will be used by (i) natural persons who have reached 18 years of age and (ii) corporate legal entities, e.g., companies. Where applicable, these Terms shall be subject to country-specific provisions as set out herein.' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "USE OF PLATFORM AND SERVICES" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "All commercial/contractual terms are offered by and agreed to between Buyers and Merchants alone. The commercial/contractual terms include, without limitation, price, taxes, shipping costs, payment methods, payment terms, date, period and mode of delivery, warranties related to products and services and after-sales services related to products and services. 6valley does not have any kind of control or does not determine or advise or in any way involve itself in the offering or acceptance of such commercial/contractual terms between the Buyers and Merchants. 6valley may, however, offer support services to Merchants in respect to order fulfillment, payment collection, call center, and other services, pursuant to independent contracts executed by it with the Merchants. 6valley is not responsible for any non-performance or breach of any contract entered into between Buyers and Merchants on the Platform. 6valley cannot and does not guarantee that the concerned Buyers and/or Merchants shall perform any transaction concluded on the Platform. 6valley is not responsible for unsatisfactory services or non-performance of services or damages or delays as a result of products that are out of stock, unavailable or back-ordered." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "6valley is operating an e-commerce platform and assumes and operates the role of facilitator, and does not at any point in time during any transaction between Buyer and Merchant on the Platform come into or take possession of any of the products or services offered by Merchant. At no time shall 6valley hold any right, title, or interest over the products nor shall 6valley have any obligations or liabilities in respect of such a contract entered into between Buyer and Merchant. You agree and acknowledge that we shall not be responsible for:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The goods provided by the shops or restaurants including, but not limited, serving of food orders suiting your requirements and needs;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The Merchant's goods not being up to your expectations or leading to any loss, harm, or damage to you;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The availability or unavailability of certain items on the menu;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The Merchant serving the incorrect orders." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "The details of the products and price lists available on the Platform are based on the information provided by the Merchants and we shall not be responsible for any change or cancellation or unavailability. All products & product images used on our platforms are only representative and shall/might not match with the actual menu/products ordered; 6valley shall not be responsible or liable for any discrepancies or variations on this aspect." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "Personal Information that you provide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "If you want to use our service, you must create an account on our Site. To establish your account, we will ask for personally identifiable information that can be used to contact or identify you, which may include your name, phone number, and e-mail address. We may also collect demographic information about you, such as your zip code, and allow you to submit additional information that will be part of your profile. Other than basic information that we need to establish your account, it will be up to you to decide how much information to share as part of your profile. We encourage you to think carefully about the information that you share and we recommend that you guard your identity and your sensitive information. Of course, you can review and revise your profile at any time." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "You understand that delivery periods quoted to you at the time of confirming the order is an approximate estimate and may vary. We shall not be responsible for any delay in the delivery of your order due to the delay at seller/merchant end for order processing or any other unavoidable circumstances." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "Your order shall be only delivered to the address designated by you at the time of placing the order on the Platform. We reserve the right to cancel the order, in our sole discretion, in the event of any change to the place of delivery and you shall not be entitled to any refund for the same. Delivery in the event of change of the delivery location shall be at our sole discretion and we reserve the right to charge an additional delivery fee if required." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "ACTIVITIES PROHIBITED ON THE PLATFORM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "The following is a partial list of the kinds of conduct that are illegal or prohibited on the Websites. 6valley reserves the right to investigate and take appropriate legal action/s against anyone who, in 6valley sole discretion, engages in any of the prohibited activities. Prohibited activities include — but are not limited to — the following:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Using the Websites for any purpose in violation of laws or regulations;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting Content that infringes the intellectual property rights, privacy rights, publicity rights, trade secret rights, or any other rights of any party;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting Content that is unlawful, obscene, defamatory, threatening, harassing, abusive, slanderous, hateful, or embarrassing to any other person or entity as determined by 6valley in its sole discretion or pursuant to local community standards;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting Content that constitutes cyber-bullying, as determined by 6valley in its sole discretion;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting Content that depicts any dangerous, life-threatening, or otherwise risky behavior;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting telephone numbers, street addresses, or last names of any person;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting URLs to external websites or any form of HTML or programming code;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Posting anything that may be "spam," as determined by 6valley in its sole discretion;' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Impersonating another person when posting Content;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Harvesting or otherwise collecting information about others, including email addresses, without their consent;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Allowing any other person or entity to use your identification for posting or viewing comments;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Harassing, threatening, stalking, or abusing any person;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Engaging in any other conduct that restricts or inhibits any other person from using or enjoying the Websites, or which, in the sole discretion of 6valley, exposes eFood or any of its customers, suppliers, or any other parties to any liability or detriment of any type;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Encouraging other people to engage in any prohibited activities as described herein." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "6valley reserves the right — but is not obligated — to do any or all of the following:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Investigate an allegation that any Content posted on the Websites does not conform to these Terms and determine in its sole discretion to remove or request the removal of the Content;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Remove Content which is abusive, illegal, or disruptive, or that otherwise fails to conform with these Terms;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Terminate a user's access to the Websites upon any breach of these Terms;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Monitor, edit, or disclose any Content on the Websites; and" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Edit or delete any Content posted on the Websites, regardless of whether such Content violates these standards." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "AMENDMENTS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "6valley reserves the right to change or modify these Terms (including our policies which are incorporated into these Terms) at any time by posting changes on the Platform. You are strongly recommended to read these Terms regularly. You will be deemed to have agreed to the amended Terms by your continued use of the Platforms following the date on which the amended Terms are posted." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "PAYMENT" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-justify mb-6", children: [
        " ",
        "We hope you find this information helpful. If you have any questions about our refund policy or anything else, please feel free to contact us.6valley reserves the right to offer additional payment methods and/or remove existing payment methods at any time at its sole discretion. If you choose to pay using an online payment method, the payment shall be processed by our third-party payment service provider(s). With your consent, your credit card/payment information will be stored with our third-party payment service provider(s) for future orders. 6valley does not store your credit card or payment information. You must ensure that you have sufficient funds on your credit and debit card to fulfill the payment of an Order. Insofar as required, 6valley takes responsibility for payments made on our Platforms including refunds, chargebacks, cancellations and dispute resolution, provided if reasonable and justifiable and in accordance with these Terms."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "CANCELLATION" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "6valley can cancel any order anytime due to the foods/products unavailability, out of coverage area and any other unavoidable circumstances." })
    ] }) })
  ] });
};
const CancellationPolicy = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-bold text-2xl mb-6", children: "Cancellation Policy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 p-4 rounded-md shadow-md mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow-md p-6 rounded-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "This is demo Cancellation policy." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: 'These terms of use (the "Terms of Use") govern your use of our website 6valley.6amtech.com (the "Website") and our "6valley" application for mobile and handheld devices (the "App"). The Website and the App are jointly referred to as the "Platform". Please read these Terms of Use carefully before you use the services. If you do not agree to these Terms of Use, you may not use the services on the Platform, and we request you to uninstall the App. By installing, downloading, and/or even merely using the Platform, you shall be contracting with 6valley and you provide your acceptance to the Terms of Use and other 6valley policies (including but not limited to the Cancellation & Refund Policy, Privacy Policy, etc.) as posted on the Platform from time to time, which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same. The Platforms will be used by (i) natural persons who have reached 18 years of age and (ii) corporate legal entities, e.g., companies. Where applicable, these Terms shall be subject to country-specific provisions as set out herein.' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "USE OF PLATFORM AND SERVICES" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "All commercial/contractual terms are offered by and agreed to between Buyers and Merchants alone. The commercial/contractual terms include, without limitation, price, taxes, shipping costs, payment methods, payment terms, date, period and mode of delivery, warranties related to products and services and after-sales services related to products and services. 6valley does not have any kind of control or does not determine or advise or in any way involve itself in the offering or acceptance of such commercial/contractual terms between the Buyers and Merchants. 6valley may, however, offer support services to Merchants in respect to order fulfillment, payment collection, call center, and other services, pursuant to independent contracts executed by it with the Merchants. 6valley is not responsible for any non-performance or breach of any contract entered into between Buyers and Merchants on the Platform. 6valley cannot and does not guarantee that the concerned Buyers and/or Merchants shall perform any transaction concluded on the Platform. 6valley is not responsible for unsatisfactory services or non-performance of services or damages or delays as a result of products that are out of stock, unavailable or back-ordered." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "6valley is operating an e-commerce platform and assumes and operates the role of facilitator, and does not at any point in time during any transaction between Buyer and Merchant on the Platform come into or take possession of any of the products or services offered by Merchant. At no time shall 6valley hold any right, title, or interest over the products nor shall 6valley have any obligations or liabilities in respect of such a contract entered into between Buyer and Merchant. You agree and acknowledge that we shall not be responsible for:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The goods provided by the shops or restaurants including, but not limited, serving of food orders suiting your requirements and needs;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The Merchant's goods not being up to your expectations or leading to any loss, harm, or damage to you;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The availability or unavailability of certain items on the menu;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The Merchant serving the incorrect orders." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "The details of the products and price lists available on the Platform are based on the information provided by the Merchants and we shall not be responsible for any change or cancellation or unavailability. All products & product images used on our platforms are only representative and shall/might not match with the actual menu/products ordered; 6valley shall not be responsible or liable for any discrepancies or variations on this aspect." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "Personal Information that you provide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "If you want to use our service, you must create an account on our Site. To establish your account, we will ask for personally identifiable information that can be used to contact or identify you, which may include your name, phone number, and e-mail address. We may also collect demographic information about you, such as your zip code, and allow you to submit additional information that will be part of your profile. Other than basic information that we need to establish your account, it will be up to you to decide how much information to share as part of your profile. We encourage you to think carefully about the information that you share and we recommend that you guard your identity and your sensitive information. Of course, you can review and revise your profile at any time." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "You understand that delivery periods quoted to you at the time of confirming the order is an approximate estimate and may vary. We shall not be responsible for any delay in the delivery of your order due to the delay at seller/merchant end for order processing or any other unavoidable circumstances." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "Your order shall be only delivered to the address designated by you at the time of placing the order on the Platform. We reserve the right to cancel the order, in our sole discretion, in the event of any change to the place of delivery and you shall not be entitled to any refund for the same. Delivery in the event of change of the delivery location shall be at our sole discretion and we reserve the right to charge an additional delivery fee if required." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "ACTIVITIES PROHIBITED ON THE PLATFORM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "The following is a partial list of the kinds of conduct that are illegal or prohibited on the Websites. 6valley reserves the right to investigate and take appropriate legal action/s against anyone who, in 6valley sole discretion, engages in any of the prohibited activities. Prohibited activities include — but are not limited to — the following:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Using the Websites for any purpose in violation of laws or regulations;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting Content that infringes the intellectual property rights, privacy rights, publicity rights, trade secret rights, or any other rights of any party;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting Content that is unlawful, obscene, defamatory, threatening, harassing, abusive, slanderous, hateful, or embarrassing to any other person or entity as determined by 6valley in its sole discretion or pursuant to local community standards;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting Content that constitutes cyber-bullying, as determined by 6valley in its sole discretion;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting Content that depicts any dangerous, life-threatening, or otherwise risky behavior;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting telephone numbers, street addresses, or last names of any person;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Posting URLs to external websites or any form of HTML or programming code;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Posting anything that may be "spam," as determined by 6valley in its sole discretion;' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Impersonating another person when posting Content;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Harvesting or otherwise collecting information about others, including email addresses, without their consent;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Allowing any other person or entity to use your identification for posting or viewing comments;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Harassing, threatening, stalking, or abusing any person;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Engaging in any other conduct that restricts or inhibits any other person from using or enjoying the Websites, or which, in the sole discretion of 6valley, exposes eFood or any of its customers, suppliers, or any other parties to any liability or detriment of any type;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Encouraging other people to engage in any prohibited activities as described herein." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "6valley reserves the right — but is not obligated — to do any or all of the following:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Investigate an allegation that any Content posted on the Websites does not conform to these Terms and determine in its sole discretion to remove or request the removal of the Content;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Remove Content which is abusive, illegal, or disruptive, or that otherwise fails to conform with these Terms;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Terminate a user's access to the Websites upon any breach of these Terms;" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Monitor, edit, or disclose any Content on the Websites; and" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Edit or delete any Content posted on the Websites, regardless of whether such Content violates these standards." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "AMENDMENTS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify mb-6", children: "6valley reserves the right to change or modify these Terms (including our policies which are incorporated into these Terms) at any time by posting changes on the Platform. You are strongly recommended to read these Terms regularly. You will be deemed to have agreed to the amended Terms by your continued use of the Platforms following the date on which the amended Terms are posted." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "PAYMENT" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-justify mb-6", children: [
        " ",
        "We hope you find this information helpful. If you have any questions about our refund policy or anything else, please feel free to contact us.6valley reserves the right to offer additional payment methods and/or remove existing payment methods at any time at its sole discretion. If you choose to pay using an online payment method, the payment shall be processed by our third-party payment service provider(s). With your consent, your credit card/payment information will be stored with our third-party payment service provider(s) for future orders. 6valley does not store your credit card or payment information. You must ensure that you have sufficient funds on your credit and debit card to fulfill the payment of an Order. Insofar as required, 6valley takes responsibility for payments made on our Platforms including refunds, chargebacks, cancellations and dispute resolution, provided if reasonable and justifiable and in accordance with these Terms."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "CANCELLATION" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-4", children: "6valley can cancel any order anytime due to the foods/products unavailability, out of coverage area and any other unavoidable circumstances." })
    ] }) })
  ] });
};
const SearchResultPage = () => {
  var _a;
  const location = useLocation();
  const [query, setQuery] = reactExports.useState("");
  reactExports.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParam = searchParams.get("query");
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [location.search]);
  const { data: products, isLoading } = useGetAllProductsQuery();
  const filteredProducts = query ? products == null ? void 0 : products.doc.filter(
    (product) => product.name.toLowerCase().startsWith(query.toLowerCase())
  ) : [];
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : products && filteredProducts.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow-md shadow-gray-200 rounded-lg py-8 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Search Result" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500", children: [
        filteredProducts.length,
        " Items found"
      ] })
    ] }),
    filteredProducts.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 transition-all ease-in duration-300", children: (_a = products == null ? void 0 : products.doc) == null ? void 0 : _a.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { data: product }, index)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg flex mt-20 justify-center items-center bg-red-100 text-red-500 py-4 px-8 w-full text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "No products found!" }) })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Search Result" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "0 Items found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "No-Product-Found mt-2 h-[300px] flex justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Heading text-lg font-bold mt-1 ", children: "No Product Found" }) })
  ] });
};
const OrderView = () => {
  var _a;
  const { id } = useParams();
  const { data: orderDetails, error, isLoading } = useGetOrderDetailsQuery(id);
  reactExports.useEffect(() => {
  }, [isLoading]);
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-600", children: [
      "Error loading order details: ",
      error.message
    ] });
  }
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : orderDetails && (orderDetails == null ? void 0 : orderDetails.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-2", children: "Customer Details" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border border-gray-300 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2", children: "Field" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2", children: "Details" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.shippingAddress.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.shippingAddress.phoneNumber })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-2", children: "Shipping Address" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border border-gray-300 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2", children: "Field" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2", children: "Details" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.shippingAddress.address })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.shippingAddress.city })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "State" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.shippingAddress.state })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "Zip Code" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.shippingAddress.zipCode })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "Country" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.shippingAddress.country })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-2", children: "Billing Address" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border border-gray-300 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2", children: "Field" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2", children: "Details" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.billingAddress.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.billingAddress.address })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.billingAddress.city })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "State" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.billingAddress.state })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "Zip Code" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.billingAddress.zipCode })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "Country" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.billingAddress.country })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-2", children: "Order Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border border-gray-300 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2", children: "Field" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2", children: "Details" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "Order Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.orderStatus })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "Total Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border border-gray-300 p-2", children: [
            "$",
            (_a = orderDetails.doc.totalAmount) == null ? void 0 : _a.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "Payment Method" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: orderDetails.doc.paymentMethod })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-2", children: "Products" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border border-gray-300 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2", children: "Product Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2", children: "Price" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: orderDetails.doc.products.map((product) => {
        var _a2;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border border-gray-300 p-2", children: [
            "$",
            (_a2 = product.price) == null ? void 0 : _a2.toFixed(2)
          ] })
        ] }, product._id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-2", children: "Vendors" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border border-gray-300 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2", children: "Vendor Name" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: orderDetails.doc.vendors.map((vendor) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: vendor.name }) }, vendor._id)) })
    ] })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Order Details not found!" });
};
const OrderDetail = () => {
  const { orderId } = useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " mx-auto bg-white rounded-lg p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-semibold", children: [
        "Order #",
        orderId
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-100 text-blue-500 px-3 py-1 rounded-full", children: "Pending" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500 mb-5", children: "16 Oct, 2024 01:10 AM" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border p-4 rounded-lg shadow-sm mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Order Verification Code: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "421870" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-blue-500 text-sx hover:text-blue-700 flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaDownload, { className: "inline w-4 h-4 mr-1" }),
          "Download Invoice"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-4 border-b-2 border-gray-200 text-left", children: "Payment Info" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-4 border-b-2 border-gray-200 text-left", children: "Shipping Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-4 border-b-2 border-gray-200 text-left", children: "Billing Address" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-4 border-b border-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Payment Status: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "Unpaid" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Payment Method: Cash On Delivery" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-4 border-b border-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Name: Aqib Ahmed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Phone: +1**********" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "City/Zip: Islamabad, 45710" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Address: Soan Garden" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-4 border-b border-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Name: Aqib Ahmed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Phone: +1**********" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "City/Zip: Islamabad, 45710" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Address: Soan Garden Heights 2" })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg shadow-sm p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-6 text-center font-semibold mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-4 text-left", children: "Order Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Qty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Price" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://via.placeholder.com/50",
              alt: "Product",
              className: "w-12 h-12 rounded-md mr-4"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Table Tennis Bat - Double Fish - 3A-C - 2 Pcs" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: "$987.00" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$957.39" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tax fee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$88.83" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Discount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "-$29.61" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Coupon discount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "-$0.00" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$1,046.22" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-5 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full", children: "Cancel Order" })
      ] }) })
    ] })
  ] }) });
};
const OtpVerification = () => {
  const [otp, setOtp] = reactExports.useState("");
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md max-w-md w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "OTP Verification" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mb-6", children: "Use your device to sign in to your account." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Gb8wJd-LSOo523qtTG4RgbmT0Whnl5ZOBjV1hQexppgqhrikp1JEeaZKdcTnID2mNKY&usqp=CAU",
            alt: "Phone",
            className: "mx-auto mb-4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-2", children: "Enter a verification code" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: "A text message with a verification code was sent to (***) ***-0000" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: otp,
          onChange: handleOtpChange,
          className: "w-full p-3 border border-gray-300 rounded-lg",
          placeholder: "Enter the 6 digit code",
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600",
          children: "Done"
        }
      )
    ] })
  ] }) });
};
const EmailVerification = () => {
  const [otp, setOtp] = reactExports.useState(new Array(6).fill(""));
  const navigate = useNavigate();
  const [searchParmas] = useSearchParams();
  const email = searchParmas.get("email");
  const [customerOTPVerification, { isLoading }] = useCustomerOTPVerificationMutation();
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => idx === index ? element.value : d)]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSubmit = async (e) => {
    var _a;
    e.preventDefault();
    try {
      const token = otp.join("");
      const res = await customerOTPVerification({
        token,
        email
      }).unwrap();
      _t.success((res == null ? void 0 : res.message) || "OTP is correct.");
      navigate("/customer/auth/sign-in");
    } catch (error) {
      console.log(error);
      _t.error(((_a = error.data) == null ? void 0 : _a.message) || "OPT not valid!");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md max-w-md w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "mx-auto h-12 w-12 text-green-500 mb-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M16 12l4-4m0 0l-4-4m4 4H4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8m16 0L12 12M4 8l8 4"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Please check your email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 mb-6", children: [
        "We have sent a code to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: email })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center space-x-4", children: otp.map((data, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          maxLength: "1",
          className: "w-12 h-12 text-2xl font-bold text-green-600 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-green-500",
          value: data,
          onChange: (e) => handleChange(e.target, index)
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm mt-4", children: [
        "Did not get the code?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-green-500 font-semibold", children: "Click to resend." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: " w-full py-3 px-6 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600",
          children: isLoading ? "OTP Verifing..." : " Verify"
        }
      ) })
    ] })
  ] }) });
};
const ScrollToTop = () => {
  const { pathname } = useLocation();
  reactExports.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
const ServerErrorImage = "" + new URL("server-error-DYLcepFa.png", import.meta.url).href;
const ServerErrorPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center items-center w-full h-screen bg-white p-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: ServerErrorImage,
        alt: "Server Error",
        loading: "lazy",
        className: "w-full max-w-md h-auto mb-6 object-contain"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-extrabold text-red-600 mb-4", children: "500 - Server Error" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 mb-6", children: "We’re sorry, but something went wrong on our end. Our team has been notified." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: "flex justify-center items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded shadow-md hover:bg-primary-600 transition duration-300",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaArrowLeft, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Go To Home" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-12 text-sm text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Vista Mart. All Rights Reserved."
    ] }) })
  ] });
};
const BrandsProductsPage = () => {
  var _a, _b, _c, _d, _e, _f, _g;
  const [searchParams] = useSearchParams();
  const { slug } = useParams();
  let filters = {};
  for (let [param, value] of searchParams.entries()) {
    filters[param] = value;
    if (param === "discount") {
      filters = {
        sort: "discount"
      };
    }
    if (param === "featured") {
      filters = {
        isFeatured: true
      };
    }
  }
  const { data: brand, isLoading } = useGetBrandBySlugQuery(slug);
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : brand && (brand == null ? void 0 : brand.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 w-full mx-auto py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary-50 p-6 rounded-lg shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-gray-800 mb-2", children: [
        "Brand Products (",
        capitalizeFirstLetter((_a = brand == null ? void 0 : brand.doc) == null ? void 0 : _a.name),
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-lg text-gray-600", children: [
        (_b = brand == null ? void 0 : brand.doc) == null ? void 0 : _b.totalProducts,
        " items found"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-4 my-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSidebar, { filters }),
      (brand == null ? void 0 : brand.doc) && ((_c = brand == null ? void 0 : brand.doc) == null ? void 0 : _c.products) && ((_e = (_d = brand == null ? void 0 : brand.doc) == null ? void 0 : _d.products) == null ? void 0 : _e.length) ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 transition-all ease-in duration-300", children: (_g = (_f = brand == null ? void 0 : brand.doc) == null ? void 0 : _f.products) == null ? void 0 : _g.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { data: product }, index)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg flex mt-20 justify-center items-center  w-full text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: img$4,
          alt: "No Product Found",
          className: "w-[60%] mx-auto"
        }
      ) })
    ] })
  ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center p-12", children: "Brand not found!" });
};
const CategoryProductsPage = () => {
  var _a, _b, _c, _d, _e, _f, _g;
  const [searchParams] = useSearchParams();
  const { slug } = useParams();
  let filters = {};
  for (let [param, value] of searchParams.entries()) {
    filters[param] = value;
    if (param === "discount") {
      filters = {
        sort: "discount"
      };
    }
    if (param === "featured") {
      filters = {
        isFeatured: true
      };
    }
  }
  const { data: category, isLoading } = useGetCategoryBySlugQuery(slug);
  return isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : category && (category == null ? void 0 : category.doc) ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 w-full mx-auto py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary-50 p-6 rounded-lg shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-gray-800 mb-2", children: [
        "Category Products (",
        capitalizeFirstLetter((_a = category == null ? void 0 : category.doc) == null ? void 0 : _a.name),
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-lg text-gray-600", children: [
        (_b = category == null ? void 0 : category.doc) == null ? void 0 : _b.totalProducts,
        " Items found"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-4 my-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSidebar, { filters }),
      (category == null ? void 0 : category.doc) && ((_c = category == null ? void 0 : category.doc) == null ? void 0 : _c.products) && ((_e = (_d = category == null ? void 0 : category.doc) == null ? void 0 : _d.products) == null ? void 0 : _e.length) ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 transition-all ease-in duration-300", children: (_g = (_f = category == null ? void 0 : category.doc) == null ? void 0 : _f.products) == null ? void 0 : _g.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { data: product }, index)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg flex mt-20 justify-center items-center w-full text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: img$4,
          alt: "NO Product Found",
          className: "w-[60%] mx-auto"
        }
      ) })
    ] })
  ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center p-12", children: "Category not found!" });
};
const router = createBrowserRouter([
  {
    path: "",
    element: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RootLayout, {}),
      ",",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToTop, {})
    ] }),
    children: [
      {
        path: "",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {})
      },
      {
        path: "vendor/auth/registration",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(VendorRegisterPage, {})
      },
      {
        path: "brands",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandsPage, {})
      },
      {
        path: "products/brand/:slug",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandsProductsPage, {})
      },
      {
        path: "categories",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoriesPage, {})
      },
      {
        path: "products/category/:slug",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryProductsPage, {})
      },
      {
        path: "vendors",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(VendorsPage, {})
      },
      {
        path: "profile",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProfilePage, {}),
        children: [
          {
            path: "profile-info",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileInfo, {})
          },
          {
            path: "my-orders",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(MyOrders, {})
          },
          {
            path: "order/:orderId",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(OrderDetail, {})
          },
          {
            path: "order-view/:id",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(OrderView, {})
          },
          {
            path: "inbox",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, {})
          },
          {
            path: "coupons",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(Coupons, {})
          },
          {
            path: "wish-list",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(WishList, {})
          },
          {
            path: "my-loyalty-point",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(MyloyaltyPoint, {})
          },
          {
            path: "support-ticket",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(SupportTicket, {})
          },
          {
            path: "my-address",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(MyAddress, {})
          },
          {
            path: "refer-earn",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(ReferEarn, {})
          },
          {
            path: "my-wallet",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(MyWallet, {})
          },
          {
            path: "track-order",
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(TrackOrder, {})
          }
        ]
      },
      {
        path: "shop-view/:slug",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ShopViewPage, {})
      },
      {
        path: "products",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductsPage, {})
      },
      {
        path: "products/:slug",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductDetailsPage, {})
      },
      {
        path: "flash-deals",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(FlashDealsPage, {})
      },
      {
        path: "customer/auth/sign-up",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(SignUpForm, {})
      },
      {
        path: "customer/auth/sign-in",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(SignInForm, {})
      },
      {
        path: "forgot-password",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ForgotPasswordPage, {})
      },
      {
        path: "users/reset-password/:hash",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ResetPassword, {})
      },
      {
        path: "cart",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(CartPage, {})
      },
      {
        path: "checkout-details",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckoutPage, {})
      },
      {
        path: "order-confirmation/:orderId",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(OrderConfirmationPage, {})
      },
      {
        path: "about-us",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutUsPage, {})
      },
      {
        path: "contact-us",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactUsPage, {})
      },
      {
        path: "faqs",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(FaqPage, {})
      },
      {
        path: "/refund-policy",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(RefundPolicy, {})
      },
      {
        path: "/return-policy",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ReturnPolicy, {})
      },
      {
        path: "/cancellation-policy",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(CancellationPolicy, {})
      },
      {
        path: "/search",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchResultPage, {})
      }
    ]
  },
  {
    path: "auth",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthLayout, {}),
    children: [
      {
        path: "vendor/login",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(VendorLoginForm, {})
      },
      {
        path: "otp",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(OtpVerification, {})
      },
      {
        path: "email/verification",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(EmailVerification, {})
      }
    ]
  },
  {
    path: "/server-error",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ServerErrorPage, {})
  },
  {
    path: "*",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {})
  }
  // {
  // 	path: "/customer/auth",
  // 	element: <AuthLayout />,
  // 	children: [
  // 		{
  // 			path: "sign-up",
  // 			element: <SignUpForm />,
  // 		},
  // 		{
  // 			path: "sign-in",
  // 			element: <SignInForm />,
  // 		},
  // 	],
  // },
]);
const loadRecentlyViewedFromLocalStorage = () => {
  const storedData = localStorage.getItem("recentlyViewed");
  return storedData ? JSON.parse(storedData) : [];
};
const saveRecentlyViewedToLocalStorage = (data) => {
  localStorage.setItem("recentlyViewed", JSON.stringify(data));
};
const MAX_RECENTLY_VIEWED = 5;
const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",
  initialState: loadRecentlyViewedFromLocalStorage(),
  reducers: {
    addViewedProduct: (state, action) => {
      const productId = action.payload;
      const timestamp = Date.now();
      const existingProductIndex = state.findIndex(
        (product) => product.id === productId
      );
      if (existingProductIndex !== -1) {
        state[existingProductIndex].timestamp = timestamp;
      } else {
        if (state.length >= MAX_RECENTLY_VIEWED) {
          state.pop();
        }
        state.unshift({ id: productId, timestamp });
      }
      saveRecentlyViewedToLocalStorage(state);
    },
    clearViewedProducts: () => {
      localStorage.removeItem("recentlyViewed");
      return [];
    }
  }
});
const recentlyViewedReducer = recentlyViewedSlice.reducer;
const initialState = {
  products: JSON.parse(localStorage.getItem("favoriteProducts")) || []
};
const favoriteProductsSlice = createSlice({
  name: "favoriteProducts",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const product = action.payload;
      if (!state.products.find((p) => p._id === product._id)) {
        state.products.push(product);
        localStorage.setItem(
          "favoriteProducts",
          JSON.stringify(state.products)
        );
      }
    },
    removeFromFavorites: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((p) => p._id !== productId);
      localStorage.setItem("favoriteProducts", JSON.stringify(state.products));
    }
  }
});
const favoriteProductsReducer = favoriteProductsSlice.reducer;
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authReducer,
    recentlyViewed: recentlyViewedReducer,
    favoriteProducts: favoriteProductsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(HelmetProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Provider_default, { store, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(react.ThemeProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ie, { position: "top-center", reverseOrder: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider, { router })
  ] }) }) })
);
