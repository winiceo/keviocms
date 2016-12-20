<template>
    <div  >



        <div ><slot></slot></div>
    </div>
</template>
<script>
    import Icon from 'iview/components/icon/icon.vue';
    import { oneOf, getStyle } from 'iview/utils/assist';

    const prefixCls = 'ivu-tabs';

    export default {
        components: { Icon },
        props: {
            activeKey: {
                type: [String, Number]
            },
            type: {
                validator (value) {
                    return oneOf(value, ['line', 'card']);
                },
                default: 'line'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'default']);
                },
                default: 'default'
            },
            animated: {
                type: Boolean,
                default: true
            },
            closable: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                navList: [],
                barWidth: 0,
                barOffset: 0
            }
        },
        computed: {

        },
        methods: {
            getTabs () {

                return this.$children

                //return this.$children.filter(item => item.$options.name === 'TabPane');
            },
            updateNav () {

                this.navList = [];
                alert(this.$children.length)

                this.getTabs().forEach((pane, index) => {
                    alert(index)
                    this.navList.push({
                        label: pane.label,
                        icon: pane.icon || '',
                        key: pane.key || index,
                        disabled: pane.disabled
                    });
                    if (!pane.key) pane.key = index;
                    if (index === 0) {
                        if (!this.activeKey) this.activeKey = pane.key || index;
                    }
                });

            },
            updateBar () {
                this.$nextTick(() => {
                    const index = this.navList.findIndex((nav, index) => nav.index === this.activeKey);
                    const prevTabs = this.$els.nav.querySelectorAll(`.${prefixCls}-tab`);
                    const tab = prevTabs[index];
                    this.barWidth = parseFloat(getStyle(tab, 'width'));

                    if (index > 0) {
                        let offset = 0;
                        const gutter = this.size === 'small' ? 0 : 16;
                        for (let i = 0; i < index; i++) {
                            offset += parseFloat(getStyle(prevTabs[i], 'width')) + gutter;
                        }

                        this.barOffset = offset;
                    } else {
                        this.barOffset = 0;
                    }
                });
            },
            updateStatus () {
                const tabs = this.getTabs();
                tabs.forEach(tab => tab.show = (tab.key === this.activeKey) || this.animated);
            },
            tabCls (item) {
                return [
                    `${prefixCls}-tab`,
                    {
                        [`${prefixCls}-tab-disabled`]: item.disabled,
                        [`${prefixCls}-tab-active`]: item.key === this.activeKey
                    }
                ]
            },
            handleChange (index) {

            },
            handleRemove (index) {
                const tabs = this.getTabs();
                const tab = tabs[index];
                tab.$destroy(true);

                if (tab.key === this.activeKey) {
                    const newTabs = this.getTabs();
                    let activeKey = -1;

                    if (newTabs.length) {
                        const leftNoDisabledTabs = tabs.filter((item, itemIndex) => !item.disabled && itemIndex < index);
                        const rightNoDisabledTabs = tabs.filter((item, itemIndex) => !item.disabled && itemIndex > index);

                        if (rightNoDisabledTabs.length) {
                            activeKey = rightNoDisabledTabs[0].key;
                        } else if (leftNoDisabledTabs.length) {
                            activeKey = leftNoDisabledTabs[leftNoDisabledTabs.length - 1].key;
                        } else {
                            activeKey = newTabs[0].key;
                        }
                    }
                    this.activeKey = activeKey;
                }
                this.$emit('on-tab-remove', tab.key);
                this.updateNav();
            }
        },
        created () {

            this.updateNav();
        },
        watch: {
            activeKey () {
                this.updateBar();
            }
        }
    }
</script>