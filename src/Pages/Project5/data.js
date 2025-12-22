const treeData = [
  {
    label: "Dashboard",
    to: "/dashboard",
    children: []
  },
  {
    label: "Users",
    to: "/users",
    children: [
      {
        label: "All Users",
        to: "/users/all",
        children: []
      },
      {
        label: "Roles",
        to: "/users/roles",
        children: [
          {
            label: "Admin",
            to: "/users/roles/admin",
            children: []
          },
          {
            label: "Editor",
            to: "/users/roles/editor",
            children: []
          },
          {
            label: "Viewer",
            to: "/users/roles/viewer",
            children: []
          }
        ]
      }
    ]
  },
  {
    label: "Products",
    to: "/products",
    children: [
      {
        label: "Electronics",
        to: "/products/electronics",
        children: [
          {
            label: "Mobiles",
            to: "/products/electronics/mobiles",
            children: []
          },
          {
            label: "Laptops",
            to: "/products/electronics/laptops",
            children: []
          }
        ]
      },
      {
        label: "Clothing",
        to: "/products/clothing",
        children: [
          {
            label: "Men",
            to: "/products/clothing/men",
            children: []
          },
          {
            label: "Women",
            to: "/products/clothing/women",
            children: []
          }
        ]
      }
    ]
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Profile",
        to: "/settings/profile",
        children: []
      },
      {
        label: "Security",
        to: "/settings/security",
        children: [
          {
            label: "Change Password",
            to: "/settings/security/password",
            children: []
          },
          {
            label: "Two Factor Auth",
            to: "/settings/security/2fa",
            children: []
          }
        ]
      }
    ]
  }
];


export default  treeData;