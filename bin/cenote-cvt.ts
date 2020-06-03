#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CenoteCvtStack } from '../lib/cenote-cvt-stack';

const app = new cdk.App();
new CenoteCvtStack(app, 'CenoteCvtStack');
