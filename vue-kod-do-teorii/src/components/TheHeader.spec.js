import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import TheHeader from "@/components/TheHeader.vue";

describe("TheHeader.vue", () => {
  it("renders default title when no prop [title] passed", () => {
    // Given
    const wrapper = shallowMount(TheHeader);
    // When
    const $h1Element = wrapper.get("h1");
    // Then
    expect($h1Element.text()).toContain("Przykładowy tytuł");
  });

  it("renders default title from prop [title] when it is passed", () => {
    const wrapper = shallowMount(TheHeader, {
      props: { title: "Witaj świecie" },
    });

    const $h1 = wrapper.get("h1");

    expect($h1.text()).toMatch("Witaj świecie");
  });

  it('should add one "❗" exclamation to title per one header clicked', async () => {
    // Given | Arrange:
    const wrapper = shallowMount(TheHeader, {
      props: { title: "Example title" },
    });
    const $header = wrapper.get("header");

    // When | Act:
    await $header.trigger("click");
    await $header.trigger("click");

    // Then | Assert:
    expect($header.get("h1").text()).toEqual("Example title ❗❗");
  });
});
