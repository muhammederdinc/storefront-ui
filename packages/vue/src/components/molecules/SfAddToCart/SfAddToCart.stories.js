import { SfAddToCart } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/AddToCart",
  component: SfAddToCart,
  parameters: {
    docs: {
      description: {
        component:
          "The Add-to-cart button and quantity input field with maximum stock validation."
      },
    },
  },
  decorators: [
    () => ({ template: '<div style="max-width: 21.25rem"><story /></div>' }),
  ],
  argTypes: {
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Boolean to indicate whether product can be added to cart",
    },
    qty: {
      control: "number",      
      table: {
        category: "Props",
        type: {
          summary: ["string", "number"],
        },
        defaultValue: {
          summary: 1,
        }
      },
      description: "Selected quantity"
    },
    click: { action: "Added to cart clicked", table: { category: "Events" } },
    input: { action: "Quantity changed", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfAddToCart },
  props: Object.keys(argTypes),
  template: `<SfAddToCart v-model="qty" :disabled="disabled"  @click="click" @input="input" />`,
});

export const Common = Template.bind({});
Common.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const WithAddToCartSlot = (args, { argTypes }) => ({
  components: { SfAddToCart },
  props: Object.keys(argTypes),
  template: `
  <SfAddToCart 
    :disabled="disabled"
    @click="click"
    @input="input"
    :qty="qty"
  >
    <template #quantity-select-input="{qty}">
      <select v-model="qty">
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="25">25</option>
      </select>
    </template>
  </SfAddToCart>`,
});
WithAddToCartSlot.args = {
  ...Common.args,
  qty: 5,
};
