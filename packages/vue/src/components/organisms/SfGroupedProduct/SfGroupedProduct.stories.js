import { SfGroupedProduct, SfProperty } from "@storefront-ui/vue";
import SfGroupedProductItem from "./_internal/SfGroupedProductItem.vue";
export default {
  title: "Components/Organisms/GroupedProduct",
  component: SfGroupedProductItem,
  parameters: {
    docs: {
      description: {
        component:
          "Grouped Product component. Built from main component - SfGroupedProduct and internal components - SfGroupedProductItem.",
      },
    },
  },
  argTypes: {
    settings: {
      control: "object",
      table: {
        category: "Props for main component",
      },
      description:
        "Settings for carousel following [glide.js documentation](https://glidejs.com/) ",
    },
    hasCarousel: {
      control: "boolean",
      defaultValue: true,
      table: {
        category: "Props for main component",
      },
      description: "Indicates if the carousel of products is on",
    },
    image: {
      control: "text",
      table: {
        category: "Props for internal component",
      },
      description: "Image url",
    },
    imageWidth: {
      control: "text",
      table: {
        category: "Props for internal component",
      },
      description: "Product image width, without unit (for internal component)",
    },
    imageHeight: {
      control: "text",
      table: {
        category: "Props for internal component",
      },
      description:
        "Product image height, without unit (for internal component)",
    },
    imagePlaceholder: {
      control: "text",
      table: {
        category: "Props for internal component",
      },
      defaultValue: "",
      description: "Product image placeholder (for internal component)",
    },
    imagePictureBreakpoint: {
      control: "number",
      table: {
        category: "Props for internal component",
      },
      defaultValue: 576,
      description: "Product image picture breakpoint (for internal component)",
    },
    title: {
      control: "text",
      table: {
        category: "Props for internal component",
        type: {
          summary: "string",
        },
      },
      defaultValue: "",
      description: "Product title (for internal component)",
    },
    priceRegular: {
      control: "text",
      table: {
        category: "Props for internal component",
        type: {
          summary: ["string", "number"],
        },
      },
      defaultValue: "",
      description: "Product regular price (for internal component)",
    },
    priceSpecial: {
      control: "text",
      table: {
        category: "Props for internal component",
        type: {
          summary: ["string", "number"],
        },
      },
      defaultValue: "",
      description: "Product special price (for internal component)",
    },
    qty: {
      control: "number",
      table: {
        category: "Props for internal component",
        type: {
          summary: ["string", "number"],
        },
        defaultValue: 1,
      },
      defaultValue: 1,
      description: "Product quantity (for internal component)",
    },
    link: {
      control: "text",
      table: {
        category: "Props for internal component",
        type: {
          summary: ["string", "object"],
        },
        defaultValue: "",
      },
      defaultValue: "",
      description: "Link to product (for internal component)",
    },
    "v-model": {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfGroupedProduct, SfProperty },
  props: Object.keys(argTypes),
  data() {
    return {
      productQty: 1,
    };
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '500px'}"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="productQty = $event"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #details>
        <div :style="{color: '#72757E', fontSize: 'var(--font-size--base'}">MSD23-345-324</div>
        <SfProperty name="Color" value="White" :style="{margin: 'auto 0 0 0'}" />
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>`,
});

export const Common = Template.bind({});
Common.args = {
  settings: { type: "slider" },
  image: "/assets/storybook/SfGroupedProduct/product-white.png",
  imageWidth: 82,
  imageHeight: 112,
  title: "Leave white brooch",
  priceRegular: "$10.99",
};

export const UseConfigurationSlot = (args, { argTypes }) => ({
  components: { SfGroupedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      productQty: 1,
    };
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '500px'}"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="productQty = $event"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #configuration>
        CUSTOM CONFIGURATION
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>`,
});
UseConfigurationSlot.args = { ...Common.args };

export const UseImageSlot = (args, { argTypes }) => ({
  components: { SfGroupedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      productQty: 1,
    };
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '500px'}"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="productQty = $event"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #image="{ image, title, imagePlaceholder, imagePictureBreakpoint }">
        <div :style="{height: '111px'}">CUSTOM IMAGE</div>
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>`,
});
UseImageSlot.args = { ...Common.args };

export const UseInputSlot = (args, { argTypes }) => ({
  components: { SfGroupedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      productQty: 1,
    };
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '500px'}"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="productQty = $event"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #input="{ qty }">
        <div style="position: absolute; bottom: 0; right: 0">
          CUSTOM INPUT
        </div>
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>`,
});
UseInputSlot.args = { ...Common.args };

export const UseTitleSlot = (args, { argTypes }) => ({
  components: { SfGroupedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      productQty: 1,
    };
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '500px'}"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="productQty = $event"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #title="{ title }">
        CUSTOM TITLE
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>`,
});
UseTitleSlot.args = { ...Common.args };

export const UsePriceSlot = (args, { argTypes }) => ({
  components: { SfGroupedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      productQty: 1,
    };
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '500px'}"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="productQty = $event"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #price="{ priceSpecial, priceRegular }">
        CUSTOM PRICE
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>`,
});
UsePriceSlot.args = { ...Common.args };
