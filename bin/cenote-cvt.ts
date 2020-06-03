#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CenoteCvtStack } from '../lib/cenote-cvt-stack';

const app = new cdk.App();
new CenoteCvtStack(app, 'CenoteCvtStack', {
    env: {
        account: '946441157221',
        region: 'ap-northeast-1'
    }
});
